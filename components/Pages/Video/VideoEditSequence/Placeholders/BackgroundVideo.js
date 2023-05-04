import {
  Group,
  Box,
  Modal,
  useMantineTheme,
  List,
  ThemeIcon,
  Badge,
  Card,
  Center,
} from "@mantine/core";

import { Thumbnail } from "@remotion/player";
import { ThumbTest } from "../../Player/remotionThumb";

import { useEffect, useState } from "react";
import { BTN_FUNC } from "../../../../ui/btn";
import { UIPaperWrapper } from "../../../../ui/Containers";
import { H3, P } from "../../../../ui/type";
import {
  IconDimensions,
  IconFileExport,
  IconFilePencil,
  IconMovie,
} from "@tabler/icons-react";

export const BackgroundVideo = (props) => {

  const { VideoAssets, PlaceHolder,handleInputChange } = props;

  const [opened, setOpened] = useState(false);
  const [Selected, setSelected] = useState(false);

  const OBJTITLE = PlaceHolder.attributes.ComponentName;
  const TYPE = "Video";
  const filteredArray = VideoAssets.filter(
    (obj) => obj.attributes.video_placeholder_type.data.attributes.Name === TYPE
  );

  const handleClick = (url) => {
    handleInputChange({ name: OBJTITLE, value: `${url}`, dynamic: false });
  };

  return (
    <>
      <H3>Video Background</H3>
      <UIPaperWrapper>
        <Group align="stretch">
          {filteredArray.map((vid, i) => {
            return (
              <FileCardWithThumb
                key={i}
                vid={vid}
                setOpened={setOpened}
                setSelected={setSelected}
              />
            );
          })}
        </Group>
      </UIPaperWrapper>
      <VideoSelectModal
        setOpened={setOpened}
        Selected={Selected}
        opened={opened}
        handleClick={handleClick}
      />
    </>
  );
};

const FileCardWithThumb = ({ vid, setOpened, setSelected }) => {
  const theme = useMantineTheme();

  const handleClick = () => {
    setOpened(true);
    setSelected(vid);
  };

  return (
    <Card
      shadow="sm"
      p="xs"
      radius="md"
      withBorder
      style={{
        width: "160px",
        alignItems: "stretch",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Section>
        <Box
          style={{
            position: "absolute",
            zIndex: 100,
            right: "10px",
          }}
        >
          <IconMovie size={40} color={theme.colors.ui[2]} />
        </Box>
        <Thumbnail
          component={ThumbTest}
          compositionWidth={160}
          compositionHeight={80}
          frameToDisplay={30}
          durationInFrames={30}
          fps={30}
          inputProps={{
            VIDEO: vid.attributes.Value.data.attributes.url,
          }}
        />
      </Card.Section>

      <Center my={10}>
        <BTN_FUNC LABEL={`View`} HANDLE={handleClick} />
      </Center>
      <Box my={10}>
        <P size={"xs"}>{vid.attributes.Name}</P>
      </Box>
    </Card>
  );
};

/* MODAL */
const VideoSelectModal = ({ Selected, setOpened, opened, handleClick }) => {
  const theme = useMantineTheme();

  function convertFileSizeToMB(fileSizeInBytes) {
    const fileSizeInMB = fileSizeInBytes / 1024; // Convert to MB
    return fileSizeInMB.toFixed(2) + " MB"; // Return as string with 2 decimal places and "MB" suffix
  }

  if (!Selected) return;
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={Selected?.attributes?.Name}
      size={"xl"}
      overlayColor={theme.colors.background}
      overlayOpacity={0.9}
      overlayBlur={2}
      transition="slide-up"
      transitionDuration={600}
      styles={{ modal: { backgroundColor: theme.colors.html } }}
    >
      <Group position="apart" my={20}>
        <Badge>
          {Selected.attributes.video_placeholder_type.data.attributes.Name}
        </Badge>
        <BTN_FUNC
          LABEL={`Use in Sequence`}
          HANDLE={() => {
            handleClick(Selected.attributes.Value.data.attributes.url);
            setOpened(false);
          }}
        />
      </Group>
      <VideoPlayer src={Selected.attributes.Value.data.attributes.url} />
      <UIPaperWrapper>
        <List spacing={"xs"}>
          <List.Item
            icon={
              <ThemeIcon color={theme.colors.ui[0]} size={24} radius="xl">
                <IconFilePencil size={16} />
              </ThemeIcon>
            }
          >
            {Selected?.attributes?.Name}
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color={theme.colors.ui[1]} size={24} radius="xl">
                <IconDimensions size={16} />
              </ThemeIcon>
            }
          >
            {convertFileSizeToMB(
              Selected.attributes.Value.data.attributes.size
            )}
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color={theme.colors.ui[1]} size={24} radius="xl">
                <IconFileExport size={16} />
              </ThemeIcon>
            }
          >
            {Selected.attributes.Value.data.attributes.ext}
          </List.Item>
        </List>
      </UIPaperWrapper>

      <Group position="right" my={20}>
        <BTN_FUNC
          LABEL={`Close`}
          HANDLE={() => {
            setOpened(false);
          }}
        />
      </Group>
    </Modal>
  );
};

/* VIDEO PLAYER FOR MODAL */
const VideoPlayer = ({ src, isVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // pause the video when the modal is hidden

  useEffect(() => {
    if (!isVisible) {
      setIsPlaying(false);
    }
  }, [isVisible]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <UIPaperWrapper p={"xs"}>
      <video
        src={`${src}`}
        controls
        style={{
          width: "100%",
        }}
        autoPlay={false}
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </UIPaperWrapper>
  );
};
