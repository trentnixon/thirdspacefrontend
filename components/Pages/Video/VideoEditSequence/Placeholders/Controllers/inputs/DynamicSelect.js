import { Select } from "@mantine/core";

export   const DynamicSelect = (props) => {
    const { handleChange, keyValuesArray } = props;
    return (
      <>
      
        <Select
          label="Select Data Column"
          placeholder="Select a Data Item"
          onChange={(value) => handleChange(value, true)}
          data={keyValuesArray.map((keyValue) => ({
            value: keyValue,
            label: keyValue,
          }))}
          style={{ width: "100%" }}
        />
  
      </>
    );
  };