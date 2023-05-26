import { Select } from "@mantine/core";
import { useState, useEffect } from "react";

export const SelectAFontWeight = (props) => {
  const { OBJ, setOBJ } = props;
  const [value, setValue] = useState("NONE");

  const SettingName = "FontWeight";
  useEffect(() => {
  /*   console.log("OBJ");
    console.log(OBJ.DATA.fields); */
  }, [OBJ]);

  const handleChange = (selectedValue) => {
    setValue(selectedValue);

    // Make sure OBJ, DATA, and Settings exist.
    if (OBJ?.DATA?.Settings) {
      // If Field exists in Settings, update its value. If not, add it with the selected value.
      setOBJ((prevState) => {
        let newOBJ = { ...prevState }; // creating a deep copy of the state
        newOBJ.DATA.Settings[SettingName] = selectedValue;
        return newOBJ;
      });
    } else {
      // If Settings doesn't exist, add it and add Field with the selected value.
      setOBJ((prevState) => {
        let newOBJ = { ...prevState }; // creating a deep copy of the state
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
