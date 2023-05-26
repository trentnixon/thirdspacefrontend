import { Select } from "@mantine/core";
import { useState, useEffect } from "react";

export const ContainerHorizontalEntryPoint = (props) => {
  const { OBJ, setOBJ } = props;
  const [value, setValue] = useState("NONE");

  const SettingName = "ContainerDirection";
  useEffect(() => {
    console.log("OBJ");
    console.log(OBJ.DATA.fields);
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
      label="Background Entry position"
      onChange={handleChange}
      value={value}
      placeholder="Select the Logo Position"
      data={[
        { value: "left", label: "From the Left" },
        { value: "right", label: "From the Right" },
      ]}
    />
  );
};
