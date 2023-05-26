// Core
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
// NPM
import { Grid } from "@mantine/core";
// UTILS
import { fetcher } from "../../../../../lib/api";
// HOOKS
import {
  useCreateComp,
  useFetchRenderingComp,
} from "../../../../../hooks/Video/useCreateComp";
// Components
import MembersShell from "../../../../../components/template/MembersShell";
import { mainCompileVideoObjects } from "../../../../../utils/FUNC_Video";
import { GridLeft } from "../../../../../components/Pages/Video/createComps/GRIDLEFT";
import { GridRight } from "../../../../../components/Pages/Video/createComps/GRIDRIGHT";
import { GridCenter } from "../../../../../components/Pages/Video/createComps/GRIDCENTER";
const qs = require("qs");

export default function SequencePage(props) {
  // Props
  const { Video } = props;
  const useVideo = Video.data.attributes;
  // useState
  const [previewDataSetRow, setpreviewDataSetRow] = useState(0);
  const [rendering, setRendering] = useState(false);

  const [RatioValue, setRatioValue] = useState("VideoShell916"); 
  const [VideoOBJ, setVideoOBJ] = useState(useVideo.OBJ);
  const [dataSet, setdataSet] = useState(useVideo.dataset.data.attributes);
  const [renderState, setRenderState] = useState({
    status: "entry",
    progress: 0,
    id: null,
    RenderStatus: false,
    isError: false,
    errorMessage: "",
  });

  // hooks
  const playerRef = useRef(null); 0
  const router = useRouter();
  // Custom hooks
  // Create instance of Comp in BD
  const [dataset, CreateComp, isComplete] = useCreateComp();
  // Track the render for the UI
  const [RenderStatus, FetchRender, isRenderComplete] = useFetchRenderingComp();
  // Get all of the items for display
  const useSequence = mainCompileVideoObjects(VideoOBJ, dataSet);

  const { id } = router.query;
  // Func
  const handleCreateComp = (NAME) => {
    setRendering(true);
    const OBJ = {
      Data: useSequence[previewDataSetRow],
      Name: NAME,
      video: [id],
      dataset: [useVideo.dataset.data.id],
    };
    CreateComp(OBJ);
  };

  const fetchRenderStatus = async () => {
    if (renderState.status === "awaitRender" && renderState.id) {
      FetchRender(renderState.id);
    }
  };

  // useEffect
  useEffect(() => {
    if (dataset?.data?.id !== undefined) {
      setRenderState({
        status: "awaitRender",
        progress: 0,
        RenderStatus: false,
        id: dataset?.data?.id,
      });
    }
  }, [dataset]);

  useEffect(() => {
    if (RenderStatus) {
      const progress =
        RenderStatus?.Progress === null ? 0 : parseInt(RenderStatus?.Progress);
      const status = RenderStatus?.Status;
      const isError = RenderStatus?.isError;
      const errorMessage = isError ? "An error occurred during rendering." : "";

      setRenderState((prevState) => ({
        ...prevState,
        progress,
        RenderStatus: status,
        status: isError ? "error" : status ? "complete" : "awaitRender",
        isError,
        errorMessage,
      }));
    }
  }, [RenderStatus]);

  useEffect(() => {
    if (renderState.status === "awaitRender") {
      const intervalId = setInterval(() => {
      //console.log("timer running");
        fetchRenderStatus();
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [renderState]);

  return (
    <MembersShell>
      <Grid mt={-15} mx={-14}>
        <GridLeft Video={Video} />

        <GridCenter
          rendering={rendering}
          renderState={renderState}
          VideoOBJ={useSequence[previewDataSetRow]}
          playerRef={playerRef}
          RATIO={RatioValue}
          dataSet={dataSet}
          previewDataSetRow={previewDataSetRow}
          setpreviewDataSetRow={setpreviewDataSetRow}
          RenderStatus={RenderStatus}
        />

        <GridRight
          handleCreateComp={handleCreateComp}
          isComplete={isComplete}
        />
      </Grid>
    </MembersShell>
  );
}

const query = qs.stringify(
  {
    populate: [
      "campaign",
      "video_template",
      "renders",
      "dataset",
      "dataset.data_set_rows",
      "dataset.data_set_rows.data_set_items",
      "OBJ",
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

export async function getServerSideProps(context) {
  const { id, newSequenceID } = context.query;

//console.log(id, newSequenceID);
  const Video = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/videos/${id}?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );

  return {
    props: {
      Video,
    },
  };
}
