//CORE
import { useEffect, useRef, useState } from "react";
//HOOKS
import { useUpdateVideo } from "../../../../hooks/Video/useStoreVideo";
// PACKAGES

//COMPONENTS
//import { AddNewSequence } from "../../../../components/Pages/Video/AddNewSequence/AddSequence";

//UTILS
import MembersShell from "../../../../components/template/MembersShell";
import {  H2 } from "../../../../components/ui/type";
import { fetcher } from "../../../../lib/api";
import { Grid, ScrollArea } from "@mantine/core";
//import TimelineV2 from "../../../../components/Pages/Video/Player/TimelineV2";
import TimelineV3 from "../../../../components/Pages/Video/Player/TimelineV3";
//import { UIPaperWrapper } from "../../../../components/ui/Containers";
//import { VideoDataset } from "../../../../components/Pages/Video/VideoPreviewContainer/VideoDataset";
import { VideoPreviewMainTabs } from "../../../../components/Pages/Video/VideoPreviewContainer/VideoPreviewMainTabs";
import { RenderSampleCTA } from "../../../../components/Pages/Video/VideoPreviewContainer/RenderSampleCTA";
import { CampaignIsRendering } from "../../../../components/Pages/Video/CampaignRendering/CampaignIsRendering";
import { VideoStateComplete } from "../../../../components/Pages/Video/VideoStateComplete/VideoStateComplete";
import { RightPanelTabs } from "../../../../components/Pages/Video/Tabs/Tabs_rightPanel";

const qs = require("qs");

const VideoCreatorPreviewer = ({ video, Modules, Videoid, fonts }) => {
  // Update the video sequence to the DB
  const [Video, UpdateVideo, working] = useUpdateVideo();
  const [VideoOBJ, setVideoOBJ] = useState(video.OBJ);
  const [sequence, setSequence] = useState(VideoOBJ);
  const [dataSet, setdataSet] = useState(video.dataset.data.attributes);
  const [CampaignRender, setCampaignRender] = useState(
    video?.campaign_renders?.data[0]
  );

  const [previewDataSetRow, setpreviewDataSetRow] = useState(0);
  const playerRef = useRef(null);

  // use effect
  useEffect(() => {
    //console.log("video", video);
    UpdateVideo(VideoOBJ, Videoid);
  }, [VideoOBJ, video]);

  // FUNC
  const handleModuleMove = (updatedModules) => {
    setSequence({
      ...sequence,
      Series: updatedModules,
    });
    setVideoOBJ({ ...VideoOBJ, Series: updatedModules });
  };

  const handleModuleEdit = (module) => {
    // Implement your module editing logic here
  };

  const handleModuleDelete = (index) => {
    const updatedModules = [...sequence.Series];
    updatedModules.splice(index, 1);
    setSequence({ ...sequence, Series: updatedModules });

    setVideoOBJ({ ...VideoOBJ, Series: updatedModules }); // Update the video OBJ with the updated Series array
  };
  useEffect(() => {
    //console.log(CampaignRender);
  }, [CampaignRender]);

  //console.log("CampaignRender", CampaignRender);
  if (CampaignRender?.attributes?.isRendering)
    return (
      <CampaignIsRendering
        CampaignRender={CampaignRender}
        setCampaignRender={setCampaignRender}
        VideoTitle={video.Name}
      />
    );

  if (video.isComplete) return <VideoStateComplete video={video} />;
  return (
    <MembersShell>
      <Grid mt={-15} mx={-14}>
        <Grid.Col span={8}>
          <H2>{video.Name}</H2>
          {sequence?.Series?.length === undefined ? (
            "Create a New Video."
          ) : (
            <>
              <VideoPreviewMainTabs 
                VideoOBJ={VideoOBJ}
                playerRef={playerRef}
                dataSet={dataSet}
                previewDataSetRow={previewDataSetRow}
                setpreviewDataSetRow={setpreviewDataSetRow}
                Videoid={Videoid}
                CampaignRender={CampaignRender}
                setCampaignRender={setCampaignRender}
                VideoTitle={video.Name}
              />
            </>
          )} 
        </Grid.Col> 
        <Grid.Col
          span={4}
          sx={(theme) => ({
            backgroundColor: theme.colors.background,
          })}
        >
          <RightPanelTabs
            Modules={Modules}
            setSequence={setSequence}
            Videoid={Videoid} 
            dataSet={dataSet}
            VideoOBJ={VideoOBJ}
            setVideoOBJ={setVideoOBJ}
            fonts={fonts}
          />
          <RenderSampleCTA Videoid={Videoid} />
        </Grid.Col>
      </Grid>
      <ScrollArea h={140} w={`auto`} offsetScrollbars>
        <TimelineV3
          sequence={sequence}
          onModuleMove={handleModuleMove}
          onModuleEdit={handleModuleEdit}
          onModuleDelete={handleModuleDelete}
          setVideoOBJ={setVideoOBJ} // Pass the setVideoOBJ function here
          Videoid={Videoid}
          playerRef={playerRef}
          dataSet={dataSet}
        />
      </ScrollArea>
    </MembersShell>
  );
};

const query = qs.stringify(
  {
    populate: [
      "campaign",
      "campaign_renders",
      "campaign_renders.renders",
      "video_template",
      "renders",
      "dataset",
      "dataset.data_set_rows",
      "dataset.data_set_rows.data_set_items",
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

const Modulesquery = qs.stringify(
  {
    populate: [
      "video_placeholder_type",
      "video_placeholders",
      "video_module_type",
      "brand"
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

//Value

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const id = params.id;
  //

  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/videos/${id}?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );
  let videos = response.data;

  const ModulesRes = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/video-modules/?${Modulesquery}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );
  let Modules = ModulesRes.data;

  const fontsRes = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/fonts`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );
  let fonts = fontsRes.data;

  return {
    props: {
      video: videos.attributes,
      Videoid: id,
      Modules: Modules,
      fonts: fonts,
    },
  };
}

export default VideoCreatorPreviewer;

/* <Grid.Col
          span={2}
          sx={(theme) => ({
            backgroundColor: theme.colors.background,
          })}
        >
          {sequence?.Series?.length === undefined ? (
            false
          ) : (
            <>
              <RenderSampleCTA Videoid={Videoid} />

             { <H3>Timeline ({sequence?.Series?.length})</H3>
              <ScrollArea h={700} offsetScrollbars>
                <TimelineV2
                  sequence={sequence}
                  onModuleMove={handleModuleMove}
                  onModuleEdit={handleModuleEdit}
                  onModuleDelete={handleModuleDelete}
                  setVideoOBJ={setVideoOBJ} // Pass the setVideoOBJ function here
                  Videoid={Videoid}
                  playerRef={playerRef}
                  dataSet={dataSet}
                />
              </ScrollArea>}
            </>
          )}
        </Grid.Col>  */

/* export const getStaticPaths = async () => {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/videos`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );

  let Response = response.data;

  const path = Response.map((d, i) => {
    return {
      params: {
        id: d.id.toString(),
      },
    };
  });

  return {
    paths: path,
    fallback: false,
  };
}; */
