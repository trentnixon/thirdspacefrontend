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
  Radio,
  Input,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { BTN_ICON_FUNC, BTN_ICON_LINK } from "../../../ui/btn";
import { H3, P } from "../../../ui/type";
import { UIPaperWrapper } from "../../../ui/Containers";

import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconEye,
  IconSquareRoundedPlusFilled,
  IconHexagons,
} from "@tabler/icons-react";
import { useState } from "react";

export const AddNewSequence = (props) => {
  const { Modules, setSequence, Videoid } = props;
  const theme = useMantineTheme();
  const [opened, handlers] = useDisclosure(false);
  const [TypeValue, setTypeValue] = useState("Static");

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
      <H3>Modules</H3>
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
        </Tabs.List>

        <Tabs.Panel value="Video" pt="xs">
          <GroupedData
            data={groupedObj["Video"]}
            Videoid={Videoid}
            handlers={handlers}
            TypeValue={TypeValue}
          />
        </Tabs.Panel>

        <Tabs.Panel value="Image" pt="xs">
          <GroupedData
            data={groupedObj["Image"]}
            Videoid={Videoid}
            handlers={handlers}
            TypeValue={TypeValue}
          />
        </Tabs.Panel>

        <Tabs.Panel value="Color" pt="xs">
          <GroupedData
            data={groupedObj["Color"]}
            Videoid={Videoid}
            handlers={handlers}
            TypeValue={TypeValue}
          />
        </Tabs.Panel>
      </Tabs>

      <PreviewModuleModal opened={opened} onClose={onClose} />
    </>
  );
};

const GroupedData = ({ data, Videoid, handlers, TypeValue }) => {
  if (!data || data.length === 0) return false;

  function groupByModuleType(data) {
    return data.reduce((result, item) => {
      const moduleTypeName =
        item.attributes.video_module_type.data.attributes.Name;

      if (!result[moduleTypeName]) {
        result[moduleTypeName] = [];
      }

      result[moduleTypeName].push(item);
      return result;
    }, {});
  }

  const groupedData = groupByModuleType(data);

  return (
    <>
      {Object.keys(groupedData).map((key) => {
        if (key === TypeValue)
          return (
            <div key={key}>
              <SimpleGrid cols={2}>
                {groupedData[key].map((item) => (
                  <UIPaperWrapper key={item.id} p={5} my={0}>
                    <Stack>
                      <Image withPlaceholder height={100} width={`100%`} />
                      <P size={`xs`} textAlign={`center`}>
                        {item.attributes.Name}
                      </P>
                      <Group position="apart">
                        <BTN_ICON_FUNC
                          HANDLE={() => {
                            handlers.open();
                          }}
                          ICON={<IconEye />}
                        />

                        <BTN_ICON_LINK
                          HREF={`/thirdspace/video/${Videoid}/sequence/new/${item.id}`}
                          ICON={<IconSquareRoundedPlusFilled />}
                        />
                      </Group>
                    </Stack>
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
