import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// PACKAGES
import { Box, Grid, Group, Space, useMantineTheme } from "@mantine/core";
// COMPONENTS
import { CreateProcessIndicator } from "../../../../../../../components/Pages/Video/VideoEditSequence/layout/createProcessIndicator";
import { SequencePreviewPlayer } from "../../../../../../../components/Pages/Video/VideoEditSequence/layout/SequencePreviewPlayer";
import { BackToListBtn } from "../../../../../../../components/Pages/Video/VideoEditSequence/components/BackToListBtn";
import { SaveToComposition } from "../../../../../../../components/Pages/Video/VideoEditSequence/components/SaveToComposition";
import { DisplaySequenceComponents } from "../../../../../../../components/Pages/Video/VideoEditSequence/layout/DisplaySequenceComponents";

// UTILS
import MembersShell from "../../../../../../../components/template/MembersShell";
import { H1, H2 } from "../../../../../../../components/ui/type";
import { fetcher } from "../../../../../../../lib/api";
import { useUpdateVideo } from "../../../../../../../hooks/Video/useStoreVideo";
import { SelectFPS } from "../../../../../../../components/Pages/Video/VideoEditSequence/Placeholders/FPS";
const qs = require("qs");

const findItemById = (arr, id) => {
  return arr.find((item) => item.ID === id);
};

function SequencePage({ Video, VideoModule, editSequenceID }) {
  // HOOKS
  const [responseVideo, UpdateVideo, working] = useUpdateVideo();
  const theme = useMantineTheme();

  // USE
  const router = useRouter();
  const [updateSuccessful, setUpdateSuccessful] = useState(false);
  const [saving, setSaving] = useState(false);
  const [CreateSequenceOBJ, setCreateSequenceOBJ] = useState(
    findItemById(Video.data.attributes.OBJ.Series, editSequenceID)
  );

  useEffect(() => {
    if (updateSuccessful) {
      router.push(`/thirdspace/video/${Video.data.id}`);
    }
  }, [updateSuccessful]); 
  // FUNC

  const handleAddSequence = async (OBJ) => {
    setSaving(true);
  
    const updatedSeries = Video.data.attributes.OBJ.Series.map((item) => {
      if (item.ID === OBJ.ID) {
        return OBJ;
      }
      return item;
    });
  
    const updatedObject = {
      ...Video.data.attributes.OBJ,
      Series: updatedSeries,
    };

  
    const success = await UpdateVideo(updatedObject, Video.data.id);
    console.log("Update success:", success); // Add this line
  
    if (success) {
      setUpdateSuccessful(true);
    }
  };

  


  return (
    <MembersShell>
      {!saving ? (
        <>
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
            <Grid.Col span={7}>
              <H2>Edit Sequence</H2>
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
              <SelectFPS
                setOBJ={setCreateSequenceOBJ}
                OBJ={CreateSequenceOBJ}
              />
            </Grid.Col>

            <Grid.Col
              span={2}
              sx={(theme) => ({
                backgroundColor: theme.colors.background,
              })}
            >
              <CreateProcessIndicator
                VideoModule={VideoModule.data.attributes}
                video_placeholders={
                  VideoModule.data.attributes.video_placeholders.data
                }
                CreateSequenceOBJ={CreateSequenceOBJ}
              />
            </Grid.Col>
          </Grid>

         
        </>
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
  { encodeValuesOnly: true }
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
  { encodeValuesOnly: true }
);

export async function getServerSideProps(context) {
  const { id, SequenceID, editSequenceID } = context.query;

  const Video = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/videos/${id}?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const VideoModule = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/video-modules/${SequenceID}?${Sequencequery}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return {
    props: {
      Video,
      VideoModule,
      editSequenceID,
    },
  };
}

export default SequencePage;
