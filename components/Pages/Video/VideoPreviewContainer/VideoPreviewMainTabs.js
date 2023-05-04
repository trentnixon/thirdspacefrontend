import { Tabs } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { VideoPreviewContainer } from "./VideoPreviewContainer";
import { VideoDataset } from "./VideoDataset";
import { RenderCampaign } from "./RenderCampaign";

export const VideoPreviewMainTabs = (props) => {
  const {
    VideoOBJ,
    playerRef,
    dataSet,
    previewDataSetRow,
    setpreviewDataSetRow,
    Videoid,
    CampaignRender,
    setCampaignRender,
    VideoTitle
  } = props;

  return (
    <Tabs variant="pills" defaultValue="Preview" mt={10}>
      <Tabs.List position="left">
        <Tabs.Tab
          value="Preview"
          icon={<IconPhoto size="0.8rem" />}
          sx={(theme) => ({
            color: theme.colors.ui[1],
            "&[data-active]": {
              backgroundColor: theme.colors.ui[0],
            },
          })}
        >
          Preview
        </Tabs.Tab>
        <Tabs.Tab
          value="Data"
          icon={<IconMessageCircle size="0.8rem" />}
          sx={(theme) => ({
            color: theme.colors.ui[1],
            "&[data-active]": {
              backgroundColor: theme.colors.ui[0],
            },
          })}
        >
          Dataset
        </Tabs.Tab>

        <Tabs.Tab
          value="render"
          ml="auto"
          icon={<IconMessageCircle size="0.8rem" />}
          sx={(theme) => ({
            color: theme.colors.ui[1],
            "&[data-active]": {
              backgroundColor: theme.colors.ui[0],
            },
          })}
        >
          Render Campaign
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Preview" pt="xs">
        <VideoPreviewContainer
          VideoOBJ={VideoOBJ}
          playerRef={playerRef}
          previewDataSetRow={previewDataSetRow}
          DATAROW={dataSet}
        />
      </Tabs.Panel>

      <Tabs.Panel value="Data" pt="xs">
        <VideoDataset
          dataSet={dataSet}
          previewDataSetRow={previewDataSetRow}
          setpreviewDataSetRow={setpreviewDataSetRow}
        />
      </Tabs.Panel>
      <Tabs.Panel value="render" pt="xs">
        <RenderCampaign
          dataSet={dataSet}
          VideoOBJ={VideoOBJ}
          Videoid={Videoid}
          setCampaignRender={setCampaignRender}
          CampaignRender={CampaignRender}
          VideoTitle={VideoTitle}
        />
      </Tabs.Panel>
    </Tabs>
  );
};
