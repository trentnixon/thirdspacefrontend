import {
  Center,
  SimpleGrid,
  Stack,
  Tabs,
  Modal,
  Group,
  useMantineTheme,
  Image,
  Space,
  Input,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { BTN_ICON_FUNC, BTN_ICON_LINK } from "../../../ui/btn";
import { H1, P } from "../../../ui/type";
import { UIPaperWrapper } from "../../../ui/Containers";

import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconEye,
  IconSquareRoundedPlusFilled,
  IconHexagons,
  IconHeadphones,
} from "@tabler/icons-react";
import { useState } from "react";

export const AddNewSequence = (props) => {
  const { Modules, setSequence, Videoid } = props;
  const theme = useMantineTheme();
  const [opened, handlers] = useDisclosure(false);

  const onClose = () => {
    handlers.close();
  };

  //console.log(Modules);
  const groupedObj = Object.values(Modules).reduce((acc, item) => {
    const name = item.attributes.video_placeholder_type.data.attributes.Name;
    acc[name] = acc[name] || [];
    acc[name].push(item);
    return acc;
  }, {});

  return (
    <>
      <SearchModules />
      <Space h={20} />

      <Tabs variant="pills" defaultValue="Video">
        <Tabs.List position="center" grow>
          <Tabs.Tab
            value="Video"
            icon={<IconPhoto size="0.8rem" />}
            sx={(theme) => ({
              color: theme.colors.ui[1],
              "&[data-active]": {
                backgroundColor: theme.colors.ui[0],
              },
            })}
          >
            Video
          </Tabs.Tab>
          <Tabs.Tab
            value="Image"
            icon={<IconMessageCircle size="0.8rem" />}
            sx={(theme) => ({
              color: theme.colors.ui[1],
              "&[data-active]": {
                backgroundColor: theme.colors.ui[0],
              },
            })}
          >
            Image
          </Tabs.Tab>
          <Tabs.Tab
            value="Color"
            icon={<IconSettings size="0.8rem" />}
            sx={(theme) => ({
              color: theme.colors.ui[1],
              "&[data-active]": {
                backgroundColor: theme.colors.ui[0],
              },
            })}
          >
            Color
          </Tabs.Tab>
          <Tabs.Tab
            value="Audio"
            icon={<IconHeadphones size="0.8rem" />}
            sx={(theme) => ({
              color: theme.colors.ui[1],
              "&[data-active]": {
                backgroundColor: theme.colors.ui[0],
              },
            })}
          >
            Audio
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Video" pt="xs">
          <GroupedData
            data={groupedObj["Video"]}
            Videoid={Videoid}
            handlers={handlers}
          />
        </Tabs.Panel>

        <Tabs.Panel value="Image" pt="xs">
          <GroupedData
            data={groupedObj["Image"]}
            Videoid={Videoid}
            handlers={handlers}
          />
        </Tabs.Panel>

        <Tabs.Panel value="Color" pt="xs">
          <GroupedData
            data={groupedObj["Color"]}
            Videoid={Videoid}
            handlers={handlers}
          />
        </Tabs.Panel>

        <Tabs.Panel value="Audio" pt="xs">
          <GroupedData
            data={groupedObj["Audio"]}
            Videoid={Videoid}
            handlers={handlers}
          />
        </Tabs.Panel>
      </Tabs>

      <PreviewModuleModal opened={opened} onClose={onClose} />
    </>
  );
};

const GroupedData = ({ data, Videoid, handlers }) => {
  if (!data || data.length === 0) return false;

  function groupByBrandName(data) {
    return data.reduce((result, item) => {
      console.log(item?.attributes?.brand?.data?.attributes?.Name);
      const brandName =
        item?.attributes?.brand?.data?.attributes?.Name || "default";

      if (!result[brandName]) {
        result[brandName] = [];
      }

      result[brandName].push(item);
      return result;
    }, {});
  }

  const groupedData = groupByBrandName(data);
  return (
    <>
      {Object.keys(groupedData).map((key) => {
        return (
          <div key={key}>
            <Space h={20} />
            <P Weight={400} marginBottom={10}>
              {key}
            </P>
            <SimpleGrid cols={1}>
              {groupedData[key].map((item) => (
                <UIPaperWrapper key={item.id} p={0} my={0}>
                  <Group position="apart">
                  <Image
                      withPlaceholder
                      alt={item.attributes.Name}
                      radius={5}
                      width={`50px`}
                      height={`50px`}
                      onClick={() => {
                        handlers.open();
                      }}
                    />
                    

                    <P size={`xs`} textAlign={`left`} width={`70%`}>
                      {item.attributes.Name}
                    </P>
                    <BTN_ICON_LINK
                      HREF={`/thirdspace/video/${Videoid}/sequence/new/${item.id}`}
                      ICON={<IconSquareRoundedPlusFilled />}
                    />
                    {/* <BTN_ICON_FUNC
                        HANDLE={() => {
                          handlers.open();
                        }}
                        ICON={<IconEye />}
                      /> */}
                    
                  </Group>
                </UIPaperWrapper>
              ))}
            </SimpleGrid>
          </div>
        );
      })}
    </>
  );
};

const PreviewModuleModal = ({ opened, onClose }) => {
  return (
    <>
      <Modal opened={opened} onClose={onClose} title={`Coming Soon`} size="xl">
        <Group position="right" my={20}>
          Preview coming soon
        </Group>
      </Modal>
    </>
  );
};

const SearchModules = () => {
  return (
    <Input
      icon={<IconHexagons />}
      variant="filled"
      placeholder="Find a Module"
    />
  );
};
