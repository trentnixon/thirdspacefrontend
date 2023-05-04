import { Select } from "@mantine/core";
import { useState, useEffect } from "react";

export const SelectAFontWeight = (props) => {
  const { OBJ, setOBJ } = props;
  const SettingName = "FontWeight";
  
  // Default to 'NONE' if FontWeight is not set in OBJ.DATA.Settings
  const defaultFontWeight = OBJ?.DATA?.Settings?.FontWeight ?? 'NONE';
  const [value, setValue] = useState(defaultFontWeight);

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
      label="Select a Font Weight"
      onChange={handleChange}
      value={value}
      placeholder="Select a Font Weight"
      data={[
        { value: 100, label: "Thin" },
        { value: 400, label: "Regular" },
        { value: 600, label: "Medium" },
        { value: 800, label: "Bold" },
        { value: 900, label: "Black" },
      ]}
    />
  );
};
