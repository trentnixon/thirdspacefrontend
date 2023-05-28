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
  Image,
  SimpleGrid,
} from "@mantine/core";

import { useState } from "react";
import { BTN_FUNC } from "../../../../ui/btn";
import { UIPaperWrapper } from "../../../../ui/Containers";
import { H3, P } from "../../../../ui/type";
import {
  IconDimensions,
  IconFileExport,
  IconFilePencil,
  IconMovie,
  IconPhoto,
} from "@tabler/icons-react";
import { SwitchDynamicToStatic } from "./Controllers/inputs/SwitchDynamicToStatic";
import { DynamicSelect } from "./Controllers/inputs/DynamicSelect";

export const BackgroundMediaImage = (props) => {
  const { VideoAssets, PlaceHolder, handleInputChange, dataset } = props;
  const [inputType, setInputType] = useState("static");
  const [opened, setOpened] = useState(false);
  const [Selected, setSelected] = useState(false);

  const OBJTITLE = PlaceHolder.attributes.ComponentName;
  const TYPE = "Image";
  const filteredArray = VideoAssets.filter(
    (obj) => obj.attributes.video_placeholder_type.data.attributes.Name === TYPE
  );

  const handleClick = (IMGOBJ) => {

    //console.log("handleClick")
    //console.log({ name: OBJTITLE, value: IMGOBJ, dynamic: false })
    handleInputChange({ name: OBJTITLE, value: IMGOBJ.URL, dynamic: false });
  };

  function findValueByKey(objArray, targetKey) {
    const targetObj = objArray.find(
      (obj) => obj.attributes.Key.toLowerCase() === targetKey.toLowerCase()
    );
    return targetObj ? targetObj.attributes.Value : null;
  }

  const handleImageInputChange = (value, isDynamic = false) => {
    const newVideo = findValueByKey(DATASETROW, value);
    const key = value;



    /* console.log("handhandleImageInputChangeleClick")
    console.log({
      name: OBJTITLE,
      value: { URL: newVideo, height: 1280, width: 1920 },
      dynamic: true,
      key,
    }) */

    handleInputChange({
      name: OBJTITLE,
      value: { URL: newVideo, height: 1280, width: 1920 },
      dynamic: true,
      key,
    });
  };
  /*
   URL: Selected.attributes.Value.data.attributes.url,
              height: Selected.attributes.Value.data.attributes.height,
              width: Selected.attributes.Value.data.attributes.width,
  */

  const DATASETROW =
    dataset.data_set_rows.data[0].attributes.data_set_items.data;
  const keyValuesArray = DATASETROW.map((item) => item.attributes.Key);

  return (
    <>
      <H3>Background Image</H3>

      <SwitchDynamicToStatic
        inputType={inputType}
        setInputType={setInputType}
      />

      {inputType === "dynamic" ? (
        <DynamicSelect
          handleChange={(value) => handleImageInputChange(value, true)}
          keyValuesArray={keyValuesArray}
        />
      ) : (
        <SimpleGrid cols={2}>
          {filteredArray.map((IMG, i) => {
            //console.log(IMG.attributes.Value.data.attributes.url);
            return (
              <FileCardWithThumb
                key={i}
                IMG={IMG}
                setOpened={setOpened}
                setSelected={setSelected}
              />
            );
          })}
        </SimpleGrid>
      )}

      <VideoSelectModal
        setOpened={setOpened}
        Selected={Selected}
        opened={opened}
        handleClick={handleClick}
      />
    </>
  );
};

const FileCardWithThumb = ({ IMG, setOpened, setSelected }) => {
  const theme = useMantineTheme();

  //console.log(IMG.attributes.Value.data.attributes);
  const handleClick = () => {
    setOpened(true);
    setSelected(IMG);
  };

  function getSmallestImage(obj) {
    const formats = obj.formats;
    if (formats) {
      let smallestImage = null;
      Object.keys(formats).forEach((key) => {
        const format = formats[key];
        if (!smallestImage || format.size < smallestImage.size) {
          smallestImage = format;
        }
      });
      return smallestImage.url;
    } else if (obj.url) {
      return obj.url;
    } else {
      return null; // or a default value if needed
    }
  }

  const useIMG = getSmallestImage(IMG.attributes.Value.data.attributes);

  return (
    <Card
      shadow="sm"
      p="xs"
      radius="md"
      withBorder
      style={{
        width: "100%",
        alignItems: "stretch",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.colors["container"],
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
          <IconPhoto size={40} color={theme.colors.ui[2]} />
        </Box>
        <Center>
          <Image src={`${useIMG}`} height={80} width={80} fit="contain" />
        </Center>
      </Card.Section>
      <Center my={10}>
        <BTN_FUNC LABEL={`View`} HANDLE={handleClick} />
      </Center>
      <Box my={10}>
        <P size={"xs"}>{IMG.attributes.Name}</P>
      </Box>
    </Card>
  );
};

/* MODAL */
const VideoSelectModal = ({ Selected, setOpened, opened, handleClick }) => {
  const theme = useMantineTheme();

  if (!Selected) return;

  function convertFileSizeToMB(fileSizeInBytes) {
    const fileSizeInMB = fileSizeInBytes / 1024; // Convert to MB
    return fileSizeInMB.toFixed(2) + " MB"; // Return as string with 2 decimal places and "MB" suffix
  }

  function getSmallestImage(obj) {
    const formats = obj.formats;
    if (formats) {
      let smallestImage = null;
      Object.keys(formats).forEach((key) => {
        const format = formats[key];
        if (!smallestImage || format.size > smallestImage.size) {
          smallestImage = format;
        }
      });
      return smallestImage.url;
    } else if (obj.url) {
      return obj.url;
    } else {
      return null; // or a default value if needed
    }
  }

  const useIMG = getSmallestImage(Selected.attributes.Value.data.attributes);

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
            handleClick({
              URL: Selected.attributes.Value.data.attributes.url,
              height: Selected.attributes.Value.data.attributes.height,
              width: Selected.attributes.Value.data.attributes.width,
            });
            setOpened(false);
          }}
        />
      </Group>
      <Center>
        <Image height={250} width={250} fit="contain" src={`${useIMG}`} />
      </Center>
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
