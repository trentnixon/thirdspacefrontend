import { NativeSelect, Select } from "@mantine/core";

export const DynamicSelect = (props) => {
  const { handleChange, keyValuesArray, value } = props;
  
  return (
    <Select
      label="Select Data Column"
      placeholder="Select a Data Item"
      onChange={(value) => handleChange(value, true)}
      data={keyValuesArray.map((keyValue) => ({
        value: keyValue,
        label: keyValue,
      }))}
      style={{ width: "100%" }}
      value={value}
    />
  );
};
