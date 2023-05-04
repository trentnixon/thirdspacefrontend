import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  ModuleContainer,
  TimelineContainerHorizontail,
  TimelineContainerHorizontailInternal,
  DropIndicator,
} from "./Components/styled";
import { P } from "../../../ui/type";

import {
  IconDotsVertical,
  IconEdit,
  IconTrash,
  IconDeviceTv,
  IconHandGrab,
} from "@tabler/icons-react";

import { UIPaperWrapper } from "../../../ui/Containers";
import { useDisclosure } from "@mantine/hooks";
import {
  Group,
  ActionIcon,
  Menu,
  Badge,
  Modal,
  Button,
  List,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { SequenceThumb, SequencePreview } from "./SequencePreview";
import { BTN_FUNC } from "../../../ui/btn";
//import { ReturnTimeDisplay } from "../VideoPreviewContainer/TimeDisplay";
import { useCurrentPlayerFrame } from "../VideoPreviewContainer/use-current-player-frame";
import { splitAudioAndVisual } from "../../../../Remotion/Utils/FUNC/DataFormatting";

const TimelineV3 = ({
  sequence,
  onModuleMove,
  onModuleEdit,
  onModuleDelete,
  Videoid,
  playerRef,
  dataSet,
}) => {
  const [modules, setModules] = useState(sequence.Series);
  const [isDraggingAnyModule, setIsDraggingAnyModule] = useState(false); // Add this line

  const frame = useCurrentPlayerFrame(playerRef);

  // Calculate the cumulative durations array
  const cumulativeDurations = sequence.Series.reduce((acc, module, index) => {
    const prevDuration = index === 0 ? 0 : acc[index - 1];
    return [...acc, prevDuration + module.DATA.Duration];
  }, []);

  function getTotalDuration(sequence) {
    const totalDuration = splitAudioAndVisual(
      sequence.Series
    ).SequenceVisual.reduce((sum, module) => {
      return sum + module.DATA.Duration;
    }, 0);

    return totalDuration;
  }

  // Use 'frame' and 'cumulativeDurations' to find the active module index
  const activeIndex = findIndex(cumulativeDurations, frame) + 1;

  function findIndex(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] <= target && arr[i + 1] > target) {
        return i;
      }
    }
    return -1;
  }

  useEffect(() => {
    //console.log(playerRef);
  }, [playerRef]);

  const moveModule = (dragIndex, hoverIndex) => {
    const updatedModules = [...modules];
    const [removed] = updatedModules.splice(dragIndex, 1);
    updatedModules.splice(hoverIndex, 0, removed);
    setModules(updatedModules);
    onModuleMove(updatedModules);
    //setVideoOBJ(updatedModules); // Add this line to update the video OBJ on drag and drop
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <P>
        {frame} {getTotalDuration(sequence)} {activeIndex}
      </P>
      <TimelineContainerHorizontail
        style={{
          backgroundColor: "black",
        }}
      >
        <TimelineContainerHorizontailInternal>
          {splitAudioAndVisual(modules).SequenceVisual.map((module, index) => (
            <TimelineModule
              key={module.ID}
              module={module}
              setWidth={
                (module.DATA.Duration / getTotalDuration(sequence)) * 100
              }
              index={index}
              moveModule={moveModule}
              onEdit={() => onModuleEdit(module)}
              onDelete={() => onModuleDelete(index)}
              isActive={index === activeIndex}
              isDraggingAnyModule={isDraggingAnyModule} // Add this line
              setIsDraggingAnyModule={setIsDraggingAnyModule} // Add this line
              Videoid={Videoid}
              dataSet={dataSet}
            />
          ))}
        </TimelineContainerHorizontailInternal>
        <AudioTimeline Audio={splitAudioAndVisual(modules).SequenceAudio} />

        <div
          style={{
            backgroundColor: "green",
            position: "absolute",
            width: `${(frame / getTotalDuration(sequence)) * 100}%`,
            height: "100%",
            overflow: "hidden",
            borderRadius: "2px",
            zIndex: 10,
          }}
        ></div>
      </TimelineContainerHorizontail>
    </DndProvider>
  );
};

export default TimelineV3;

const AudioTimeline = ({ Audio }) => {
  //console.log("Audio", Audio);
  if (Audio.length === 0) return;
  return (
    <TimelineContainerHorizontailInternal>
      <ModuleContainer
        style={{
          width: `100%`,
          zIndex: 50,
          borderRadius: "10px",
        }}
      >
        <UIPaperWrapper p={"xs"}>
          <P size={10} textAlign={`center`}>
            Audio
          </P>
        </UIPaperWrapper>
      </ModuleContainer>
    </TimelineContainerHorizontailInternal>
  );
};

const TimelineModule = ({
  module,
  index,
  moveModule,
  onEdit,
  onDelete,
  isActive,
  isDraggingAnyModule,
  setIsDraggingAnyModule,
  Videoid,
  dataSet,
  setWidth,
}) => {
  const moduleRef = React.useRef(null);

  const DefaultHeight = 40;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "MODULE",
    item: { id: module.ID, index },
    collect: (monitor) => {
      const isDraggingLocal = monitor.isDragging();
      setIsDraggingAnyModule(isDraggingLocal);
      return { isDragging: isDraggingLocal };
    },
  }));

  const [, drop] = useDrop({
    accept: "MODULE",
    hover(item, monitor) {
      if (!moduleRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveModule(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(moduleRef));

  return (
    <>
      <DropIndicator
        style={{
          display: isDraggingAnyModule ? "block" : "none",
        }}
      />
      <ModuleContainer
        ref={moduleRef}
        style={{
          opacity: isDragging ? 0 : 1,
          width: `${setWidth}%`,
          zIndex: 50,
          borderRadius: "10px",
        }}
      >
        <UIPaperWrapper p={0}>
          <div
            style={{
              position: "relative",

              height: `${DefaultHeight}px`,
            }}
          >
            <div
              style={{
                backgroundColor: isActive ? "green" : "transparent",
                width: "10px",
                height: "10px",
                position: "absolute",
                top: "5px",
                right: "5px",
                borderRadius: "100%",
                zIndex: 1000,
              }}
            ></div>
            <div
              style={{
                position: "relative",
                zIndex: 1000,
                height: `${DefaultHeight}px`,
              }}
            >
              <Group
                position="apart"
                mt={0}
                p={0}
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "0px",
                  width: "100%",
                }}
              >
                <SequenceMenu
                  onDelete={onDelete}
                  module={module}
                  Videoid={Videoid}
                />

                {/*   <P size={8}>Sequence {index + 1}</P> */}
                <IconHandGrab
                  name="menu"
                  className="drag-icon"
                  style={{ cursor: "grabbing", marginRight: "8px" }}
                />
              </Group>

              <Group
                position="center"
                mt={0}
                p={0}
                style={{
                  position: "absolute",
                  top: `${DefaultHeight / 2}px`,
                  left: "0px",
                  width: "100%",
                  borderRadius: " 0 0 5px 5px",
                }}
              >
                <P size={10} textAlign={`center`}>
                  {module.Name}
                </P>
              </Group>
            </div>
            {/* <SequenceThumb DATA={module} dataSet={dataSet} /> */}
          </div>
        </UIPaperWrapper>
      </ModuleContainer>
    </>
  );
};

const SequenceMenu = ({ onDelete, module, Videoid }) => {
  const [opened, handlers] = useDisclosure(false);
  const onClose = () => {
    handlers.close();
  };
  return (
    <>
      <Menu transition="pop" withArrow position="bottom-start">
        <Menu.Target>
          <ActionIcon>
            <IconDotsVertical size={16} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            onClick={() => {
              handlers.open();
            }}
            icon={<IconDeviceTv size={16} stroke={1.5} />}
          >
            Preview
          </Menu.Item>
          <Menu.Item
            component={Link}
            href={`/thirdspace/video/${Videoid}/sequence/edit/${module.componentID}/${module.ID}`}
            icon={<IconEdit size={16} stroke={1.5} />}
          >
            Edit Sequence
          </Menu.Item>
          <Menu.Item
            onClick={onDelete}
            icon={<IconTrash size={16} stroke={1.5} />}
            color="red"
          >
            Delete Sequence
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <PreviewSequence opened={opened} onClose={onClose} module={module} />
    </>
  );
};

const PreviewSequence = ({ opened, onClose, module }) => {
  // const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        title={`${module.Type} ${module.Name}`}
        size="xl"
      >
        <SequencePreview DATA={module} />
        <Group position="right" my={20}>
          <BTN_FUNC
            LABEL={`Edit`}
            HANDLE={() => {
              onClose();
            }}
          />
          <BTN_FUNC
            LABEL={`Close`}
            HANDLE={() => {
              onClose();
            }}
          />
        </Group>
      </Modal>
    </>
  );
};
