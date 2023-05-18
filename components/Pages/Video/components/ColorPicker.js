import { useState } from "react";
import { Center, Group, Stack } from "@mantine/core";

import { HexColorInput, HexColorPicker } from "react-colorful";
import { H3 } from "../../../ui/type";
export const VideoSettings_ColorPicker = ({
  handleColorChange,
  Property,
  Color,
}) => {
  //handleFontChange={handleFontChange} Property={'Primary'} Color={OBJ.Settings.Theme.Primary}
  const [color, setColor] = useState(Color ? Color : "#b32aa9");
  const handleChange = (Color, event) => {
    setColor(Color);
    handleColorChange({
      Color,
      Property,
    });
  };

  return (
    <Stack>
      <H3>{Property}</H3>
      <HexColorPicker color={color} onChange={handleChange} />
      <HexColorInput color={color} onChange={setColor} />
    </Stack>
  );
};

export const VideoColorPickerGroup = ({ handleColorChange, OBJ }) => {
  return (
    <Group position="center" mb={30}>
      <VideoSettings_ColorPicker
        handleColorChange={handleColorChange}
        Property={"Primary"}
        Color={OBJ.Settings.Theme.Primary}
      />
      <VideoSettings_ColorPicker
        handleColorChange={handleColorChange}
        Property={"Secondary"}
        Color={OBJ.Settings.Theme.Secondary}
      />
      <VideoSettings_ColorPicker
        handleColorChange={handleColorChange}
        Property={"BackgroundColor"}
        Color={OBJ.Settings.Theme.BackgroundColor}
      />
    </Group>
  );
};

export const VideoColorPickerStack = ({ handleColorChange, OBJ }) => {
  return (
    <Stack position="center" mb={30}>
      <Center>
        <VideoSettings_ColorPicker
          handleColorChange={handleColorChange}
          Property={"Primary"}
          Color={OBJ.Settings.Theme.Primary}
        />
      </Center>
      <Center>
        <VideoSettings_ColorPicker
          handleColorChange={handleColorChange}
          Property={"Secondary"}
          Color={OBJ.Settings.Theme.Secondary}
        />
      </Center>
      <Center>
        <VideoSettings_ColorPicker
          handleColorChange={handleColorChange}
          Property={"BackgroundColor"}
          Color={OBJ.Settings.Theme.BackgroundColor}
        />
      </Center>
    </Stack>
  );
};
