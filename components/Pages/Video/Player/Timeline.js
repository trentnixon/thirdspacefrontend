import {
  Timeline,
  Text,
  Box,
  ScrollArea,
  Paper,
  useMantineTheme,
  Group,
  Badge,
  ActionIcon,
  Menu,
} from "@mantine/core";

import {
  IconPencil,
  IconMessages,
  IconNote,
  IconEdit,
  IconTrash,
  IconDotsVertical,
} from "@tabler/icons-react";

import { useState, useRef, useEffect } from "react";
import { BTN_FUNC } from "../../../ui/btn";
import { UIPaperWrapper } from "../../../ui/Containers";
import { P } from "../../../ui/type";
import { VideoDetials } from "./VideoDetails";

export const VideoTimeline = (props) => {
  const { VideoOBJ, playerRef, SequentialFrames, removeSequenceAtIndex } =
    props;
  const [reversedSeries, setReversedSeries] = useState(
    VideoOBJ.Series.reverse()
  );
  const theme = useMantineTheme();
  const [active, setActive] = useState(0);

  const viewport = useRef(null);

  function findIndex(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] <= target && arr[i + 1] > target) {
        return i;
      }
    }
    return -1;
  }

  useEffect(() => {
    playerRef.current.addEventListener("frameupdate", (e) => {
      //console.log("current frame is " + e.detail.frame); // current frame is 120
      active !== findIndex(SequentialFrames, e.detail.frame) + 1
        ? setActive(findIndex(SequentialFrames, e.detail.frame) + 1)
        : false;
    });
  }, []);

  useEffect(() => {
    if (viewport.current) {
      viewport.current.scrollTo({ top: active * 130, behavior: "smooth" });
    }
  }, [active, viewport]);

  useEffect(() => {
    setReversedSeries(VideoOBJ.Series.reverse());
  }, [VideoOBJ]);

  return (
    <Box>
      <ScrollArea style={{ height: 400 }} viewportRef={viewport}>
        <Timeline active={active} lineWidth={5} bulletSize={22} >
          {VideoOBJ.Series.map((series, i) => {
            return (
              <Timeline.Item key={i} styles={{ itemContent: { backgroundColor: 'red' } }}>
                <UIPaperWrapper
                  backgroundColor={active === i ? `2` : "background"}
                >
                  <Group position="apart">
                    <P size={10}>{series.Name}</P>
                    <SequenceMenu
                      REMOVE={() => {
                        removeSequenceAtIndex(series.ID);
                      }}
                    />
                  </Group>

                 {/*  <P>Duration: {series.DATA.Duration} fps</P>
                  <P>{series.DATA.Title ? series.DATA.Title : "no title"}</P> */}

                 {/*  <Group position="apart">
                    <Text size="sm">ID : {series.ID}</Text>
                    <Badge variant="filled">
                      {series.DATA.Duration / 30} Sec
                    </Badge>
                  </Group> */}
                </UIPaperWrapper>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </ScrollArea>

      <VideoDetials VideoOBJ={VideoOBJ} />
    </Box>
  );
};

const SequenceMenu = ({ REMOVE }) => {
  return (
    <Menu transition="pop" withArrow position="bottom-end">
      <Menu.Target>
        <ActionIcon>
          <IconDotsVertical size={16} stroke={1.5} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconEdit size={16} stroke={1.5} />}>
          Edit Sequence
        </Menu.Item>
        <Menu.Item
          onClick={REMOVE}
          icon={<IconTrash size={16} stroke={1.5} />}
          color="red"
        >
          Delete Sequence
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
