import { Center, Group, SimpleGrid } from "@mantine/core";
import { UIPaperWrapper } from "../../../ui/Containers";
import { H3, H4, P } from "../../../ui/type";
import { BTN_FUNC } from "../../../ui/btn";
import { mainCompileVideoObjects } from "../../../../utils/FUNC_Video";
import { useCreateCampaignRender } from "../../../../hooks/Video/useCreateCampaignRender";
import { useEffect, useState } from "react";

export const RenderCampaign = (props) => {
  const {
    dataSet,
    VideoOBJ,
    Videoid,
    CampaignRender,
    setCampaignRender,
    VideoTitle,
  } = props;

  const [dataset, CreateCampaignRender, isComplete] = useCreateCampaignRender();
  const [confirm, setConfirm] = useState(false);
  const FindDuration = (VideoOBJ) => {
    const Frames = VideoOBJ.reduce((acc, obj) => acc + obj.DATA.Duration, 0);
    return Frames / 30;
  };

  const CreateCampaignRenderOBJ = () => {
    return mainCompileVideoObjects(VideoOBJ, dataSet);
  };

  const processRender = () => {
    const OBJ = {
      Name: VideoTitle,
      CampaignOBJ: CreateCampaignRenderOBJ(),
      video: [Videoid],
    };
    CreateCampaignRender(OBJ);
  };

  useEffect(() => {
    if (dataset !== null) {
      const updatedData = {
        ...dataset.data,
        attributes: {
          ...dataset.data.attributes,
          isRendering: true,
        },
      };
      console.log(updatedData);
      setCampaignRender(updatedData);
    }
  }, [dataset, setCampaignRender]);

  return (
    <>
      <H4>Render Videos : {VideoTitle}</H4>

      <SimpleGrid cols={4} spacing="xs" verticalSpacing="xs">
        <UIPaperWrapper my={0}>
          <Center>
            <P>Video Modules</P>
          </Center>
          <Center>
            <H4>{VideoOBJ.Series.length}</H4>
          </Center>
        </UIPaperWrapper>
        <UIPaperWrapper my={0}>
          <Center>
            <P>Video Duration</P>
          </Center>
          <Center>
            <H4>{FindDuration(VideoOBJ.Series)} Sec</H4>
          </Center>
        </UIPaperWrapper>

        <UIPaperWrapper my={0}>
          <Center>
            <P>Video Ratios</P>
          </Center>
          <Center>
            <H4>3</H4>
          </Center>
        </UIPaperWrapper>

        <UIPaperWrapper my={0}>
          <Center>
            <P>Expected Videos</P>
          </Center>
          <Center>
            <H4>{3 * dataSet.data_set_rows.data.length}</H4>
          </Center>
        </UIPaperWrapper>
      </SimpleGrid>

      <H4>Warning</H4>
      <UIPaperWrapper>
        <P>
          When you render this video series, it will be locked in place and no
          further edits will be allowed. However, you will still have access to
          other settings options such as deleting the series, adjusting its
          active status, and making it accessible to clients.
        </P>
      </UIPaperWrapper>
      <Group position="right">
        {CampaignRender === undefined ? (
          confirm ? (
            <Group>
              <BTN_FUNC LABEL={`Confirm Render`} HANDLE={processRender} />
              <BTN_FUNC
                LABEL={`Cancel`}
                HANDLE={() => {
                  setConfirm(false);
                }}
              />
            </Group>
          ) : (
            <BTN_FUNC
              LABEL={`Render Series`}
              HANDLE={() => {
                setConfirm(true);
              }}
            />
          )
        ) : (
          "Only 1 Render per video"
        )}
      </Group>
    </>
  );
};
