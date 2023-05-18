import { H3, H4 } from "../../../ui/type";
import { VideoColorPickerGroup } from "../components/ColorPicker";
import { SelectVideoFont } from "../components/SelectVideoFont";
import { Tabs } from "@mantine/core";
import {
    IconTypography,
  IconMessageCircle,
  IconColorPicker,
} from "@tabler/icons-react";

export const InVideoSettings = (props) => {
  const { VideoOBJ, setVideoOBJ, fonts } = props;

  const handleColorChange = (event) => {
    setVideoOBJ((prevOBJ) => ({
      ...prevOBJ,
      Settings: {
        ...prevOBJ.Settings,
        Theme: {
          ...prevOBJ.Settings.Theme,
          [event.Property]: event.Color,
        },
      },
    }));
  };

  const handleFontChange = (event) => {
    setVideoOBJ((prevOBJ) => ({
      ...prevOBJ,
      Settings: {
        ...prevOBJ.Settings,
        Font: {
          ...prevOBJ.Settings.Font,
          fontFamily: event,
        },
      },
    }));
  };

  return (
    <>
      <Tabs variant="pills" defaultValue="Color">
        <Tabs.List position="center" grow>
          <Tabs.Tab
            value="Color"
            icon={<IconColorPicker size="0.8rem" />}
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
            value="Fonts"
            icon={<IconTypography size="0.8rem" />}
            sx={(theme) => ({
              color: theme.colors.ui[1],
              "&[data-active]": {
                backgroundColor: theme.colors.ui[0],
              },
            })}
          >
            Fonts
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Color" pt="xs">
          <H4>Global Colors</H4>
          <VideoColorPickerGroup
            handleColorChange={handleColorChange}
            OBJ={VideoOBJ}
          />
        </Tabs.Panel>

        <Tabs.Panel value="Fonts" pt="xs">
          <H4>Global Font</H4>
          <SelectVideoFont
            fonts={fonts}
            OBJ={VideoOBJ}
            handleFontChange={handleFontChange}
          />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};
