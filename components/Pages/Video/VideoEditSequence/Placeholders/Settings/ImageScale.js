import { Select } from "@mantine/core";
import { useState, useEffect } from "react";

export const ImageScale = (props) => {
  const { OBJ, setOBJ } = props;
  const Field = "BackgroundMediaImage";
  
  // Default to 'NONE' if scale setting is not present in OBJ.DATA.fields
  const defaultImageScale = OBJ?.DATA?.fields?.find(field => field.name === Field)?.value?.Settings?.scale ?? 'NONE';
  const [value, setValue] = useState(defaultImageScale);

  useEffect(() => {
    //console.log("OBJ");
    //console.log(OBJ.DATA.fields);
  }, [OBJ]);

  const handleChange = (selectedValue) => {
    setValue(selectedValue);

    if (OBJ && OBJ.DATA && OBJ.DATA.fields) {
      const fieldIndex = OBJ.DATA.fields.findIndex((field) => field.name === Field);
      if (fieldIndex !== -1) {
        const updatedFields = {
          ...OBJ.DATA.fields[fieldIndex],
          value: {
            ...OBJ.DATA.fields[fieldIndex].value,
            Settings: {
              scale: selectedValue,
            },
          },
        };
        setOBJ({
          ...OBJ,
          DATA: {
            ...OBJ.DATA,
            fields: [
              ...OBJ.DATA.fields.slice(0, fieldIndex),
              updatedFields,
              ...OBJ.DATA.fields.slice(fieldIndex + 1),
            ],
          },
        });
      }
    }
  };

  if (OBJ.Type !== "Image" || OBJ.DATA.fields === undefined) return false;
  
  return (
    <Select
      label="Image Scale"
      onChange={handleChange}
      value={value}
      placeholder="Select the image scale animation"
      data={[
        { value: "NONE", label: "NONE" },
        { value: "IN", label: "IN" },
        { value: "OUT", label: "OUT" },
      ]}
    />
  );
};
