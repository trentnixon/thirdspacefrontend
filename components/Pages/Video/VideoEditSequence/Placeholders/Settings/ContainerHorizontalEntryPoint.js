import { Select } from "@mantine/core";
import { useState, useEffect } from "react";

export const ContainerHorizontalEntryPoint = (props) => {
  const { OBJ, setOBJ } = props;

  const SettingName = "ContainerDirection";
  
  // Default to 'NONE' if ContainerDirection is not set in OBJ.DATA.Settings
  const defaultContainerDirection = OBJ?.DATA?.Settings?.ContainerDirection ?? 'NONE';
  const [value, setValue] = useState(defaultContainerDirection);

  useEffect(() => {
    //console.log("OBJ");
    //console.log(OBJ.DATA.fields);
  }, [OBJ]);

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
