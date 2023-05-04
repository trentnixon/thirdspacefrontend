import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  ModuleContainer,
  TimelineContainer,
  DropIndicator,
} from "./Components/styled";
import { P } from "../../../ui/type";

import {
  IconGripVertical,
  IconDotsVertical,
  IconEdit,
  IconTrash,
  IconMovie,
  IconPhoto,
  IconDeviceTv,
  IconArrowsUpDown,
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
import { ReturnTimeDisplay } from "../VideoPreviewContainer/TimeDisplay";
import { useCurrentPlayerFrame } from "../VideoPreviewContainer/use-current-player-frame";

const TimelineV2 = ({
  sequence,
  onModuleMove,
  onModuleEdit,
  onModuleDelete,
  Videoid,
  playerRef,
  dataSet
}) => {
  const [modules, setModules] = useState(sequence.Series);
  const [isDraggingAnyModule, setIsDraggingAnyModule] = useState(false); // Add this line

  const frame = useCurrentPlayerFrame(playerRef);

  // Calculate the cumulative durations array
  const cumulativeDurations = sequence.Series.reduce((acc, module, index) => {
    const prevDuration = index === 0 ? 0 : acc[index - 1];
    return [...acc, prevDuration + module.DATA.Duration];
  }, []);

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

  useEffect(() => {}, [playerRef]);

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
      <TimelineContainer>
        {modules.map((module, index) => (
          <TimelineModule
            key={module.ID}
            module={module}
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
      </TimelineContainer>
    </DndProvider>
  );
};

export default TimelineV2;

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
  dataSet
}) => {
  const moduleRef = React.useRef(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "MODULE",
    item: { id: module.ID, index },
    collect: (monitor) => {
      const isDraggingLocal = monitor.isDragging();
      setIsDraggingAnyModule(isDraggingLocal);
      return { isDragging: isDraggingLocal };
    },
  }));

  const ICONS = {
    Video: <IconMovie size={20} />,
    Image: <IconPhoto size={20} />,
  };

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
        }}
      >
        <UIPaperWrapper p={0}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              height: "180px",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 1000,
                height: "180px",
              }}
            >
              <Group
                position="apart"
                mt={0}
                p={5}
                bg={isActive ? "green" : "gray"}
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  borderRadius: "5px 5px 0 0",
                }}
              >
                <SequenceMenu
                  onDelete={onDelete}
                  module={module}
                  Videoid={Videoid}
                />

                <P size={`xs`}>
                  {/* {ICONS[module.Type]}  */}Sequence {index + 1}{" "}
                </P>
                <IconArrowsUpDown
                  name="menu"
                  className="drag-icon"
                  style={{ cursor: "grabbing", marginRight: "8px" }}
                />
              </Group>

              <Group
                position="left"
                mt={20}
                p={5}
                bg={"blue"}
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "0px",
                  width: "100%",
                  borderRadius: " 0 0 5px 5px",
                }}
              >
                <P size={`xs`} width={`90%`} textAlign={`cetner`}>
                  {module.Name} | {module.DATA.Duration / 30} Seconds
                </P>
              </Group>
            </div>
            <SequenceThumb DATA={module} dataSet={dataSet} />
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
      <Menu transition="pop" withArrow position="bottom-end">
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
