// CORE
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// PACKAGES
import { Grid, Group } from "@mantine/core";
// COMPONENTS
import MembersShell from "../../../../../../components/template/MembersShell";
import { CreateProcessIndicator } from "../../../../../../components/Pages/Video/VideoEditSequence/layout/createProcessIndicator";
import { SequencePreviewPlayer } from "../../../../../../components/Pages/Video/VideoEditSequence/layout/SequencePreviewPlayer";
import { BackToListBtn } from "../../../../../../components/Pages/Video/VideoEditSequence/components/BackToListBtn";
import { SaveToComposition } from "../../../../../../components/Pages/Video/VideoEditSequence/components/SaveToComposition";
import { DisplaySequenceComponents } from "../../../../../../components/Pages/Video/VideoEditSequence/layout/DisplaySequenceComponents";

// UTILS

import { H2 } from "../../../../../../components/ui/type";
import { fetcher } from "../../../../../../lib/api";
import { useUpdateVideo } from "../../../../../../hooks/Video/useStoreVideo";
import { SequenceSettings } from "../../../../../../components/Pages/Video/VideoEditSequence/Placeholders/Settings";
const qs = require("qs");

export default function SequencePage({ Video, VideoModule }) {
  const router = useRouter();
  const [updateSuccessful, setUpdateSuccessful] = useState(false);
  const [saving, setSaving] = useState(false);
  const [responseVideo, UpdateVideo, working] = useUpdateVideo();

  function generateRandomID() {
    const randomNum = Math.random().toString().slice(2, 12);
    return randomNum;
  }

  const [CreateSequenceOBJ, setCreateSequenceOBJ] = useState({
    component: VideoModule.data.attributes.ComponentName,
    componentID: VideoModule.data.id,
    Name: VideoModule.data.attributes.Name,
    Type: VideoModule.data.attributes.video_placeholder_type.data.attributes
      .Name,
    ID: generateRandomID(),
    DATA: {Settings:{}},
  });

  const handleAddSequence = async (OBJ) => {
    setSaving(true);
    const updatedObject = {
      ...Video.data.attributes.OBJ,
      Series: [...Video.data.attributes.OBJ.Series, OBJ],
    };

    const success = await UpdateVideo(updatedObject, Video.data.id);
  //console.log("Update success:", success); // Add this line
    if (success) {
      setUpdateSuccessful(true);
    }
  };

  useEffect(() => {
    if (updateSuccessful) {
      router.push(`/thirdspace/video/${Video.data.id}`);
    }
  }, [updateSuccessful]);

  useEffect(() => {
    console.log("CreateSequenceOBJ")
    console.log(CreateSequenceOBJ)
  }, [CreateSequenceOBJ]);

  return (
    <MembersShell>
      {!saving ? (
        <Grid mt={-15} mx={-14}>
          <Grid.Col
            span={3}
            sx={(theme) => ({
              backgroundColor: theme.colors.background,
            })}
          >
            <DisplaySequenceComponents 
              Video={Video.data.attributes}
              VideoModule={VideoModule.data.attributes}
              CreateSequenceOBJ={CreateSequenceOBJ}
              setCreateSequenceOBJ={setCreateSequenceOBJ}
              dataset={Video.data.attributes.dataset.data.attributes}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <H2>Create a New Sequence</H2> 

            <Group position="apart" my={20}>
              <BackToListBtn HREF={`/thirdspace/video/${Video.data.id}`} />
              <SaveToComposition
                CreateSequenceOBJ={CreateSequenceOBJ}
                VideoModule={VideoModule.data}
                handleAddSequence={handleAddSequence}
              />
            </Group>
            <SequencePreviewPlayer
              VideoModule={VideoModule.data}
              Video={Video}
              CreateSequenceOBJ={CreateSequenceOBJ}
              dataset={Video.data.attributes.dataset.data.attributes} 
            />
           <CreateProcessIndicator
              VideoModule={VideoModule.data.attributes}
              video_placeholders={
                VideoModule.data.attributes.video_placeholders.data
              }
              CreateSequenceOBJ={CreateSequenceOBJ}
            />
          </Grid.Col>

          <Grid.Col
            span={3}
            sx={(theme) => ({
              backgroundColor: theme.colors.background,
            })}
          >
            <SequenceSettings 
              setOBJ={setCreateSequenceOBJ}
              OBJ={CreateSequenceOBJ}
            />
            
          </Grid.Col>
        </Grid>
      ) : (
        <p>Please wait, Saving Sequence...</p>
      )}
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

const Sequencequery = qs.stringify(
  {
    populate: [
      "video_placeholders",
      "video_placeholders.video_placeholder_type",
      "video_placeholder_type",
      "video_module_type",
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

  const VideoModule = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/video-modules/${newSequenceID}?${Sequencequery}`,
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
      VideoModule,
    },
  };
}
