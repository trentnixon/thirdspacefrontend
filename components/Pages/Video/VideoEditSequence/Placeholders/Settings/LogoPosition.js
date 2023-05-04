import { Select } from "@mantine/core";
import { useState, useEffect } from "react";

export const LogoPosition = (props) => {
  const { OBJ, setOBJ } = props;
  const Field = "BrandLogo";
  const SettingName = "LogoPosition";
  
  // Default to 'NONE' if LogoPosition is not set in OBJ.DATA.Settings
  const defaultLogoPosition = OBJ?.DATA?.Settings?.LogoPosition ?? 'NONE';
  const [value, setValue] = useState(defaultLogoPosition);

  useEffect(() => {}, [OBJ]);

  const handleChange = (selectedValue) => {
    setValue(selectedValue);

    if (OBJ?.DATA?.Settings) {
      setOBJ((prevState) => {
        let newOBJ = { ...prevState }; 
        newOBJ.DATA.Settings[SettingName] = selectedValue;
        return newOBJ;
      });
    } else {
      setOBJ((prevState) => {
        let newOBJ = { ...prevState }; 
        newOBJ.DATA = {
          ...newOBJ.DATA,
          Settings: { [SettingName]: selectedValue },
        };
        return newOBJ;
      });
    }
  };

  if (OBJ.DATA.fields === undefined) return false;
  return (
    <Select
      label="Logo Position"
      onChange={handleChange}
      value={value}
      placeholder="Select the Logo Position"
      data={[
        { value: "Position1", label: "Top Left" },
        { value: "Position2", label: "Top Right" },
        { value: "Position3", label: "Bottom Left" },
        { value: "Position4", label: "Bottom Right" },
      ]}
    />
  );
};

