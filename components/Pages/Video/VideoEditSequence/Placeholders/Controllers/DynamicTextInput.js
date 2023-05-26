import { Group } from "@mantine/core";
import { UIPaperWrapper } from "../../../../../ui/Containers";
import { H3 } from "../../../../../ui/type";
import { useState } from "react";
import { DynamicSelect } from "./inputs/DynamicSelect";
import { StaticInput } from "./inputs/StaticInput";
import { SwitchDynamicToStatic } from "./inputs/SwitchDynamicToStatic";

// Rename the component to DynamicTextInput
export const DynamicTextInput = (props) => {
  // props
  const { handleInputChange, PlaceHolder, dataset, CreateSequenceOBJ, title } =
    props;

  // vars
  const fieldName = `${PlaceHolder.attributes.ComponentName}`;
  const DATASETROW =
    dataset.data_set_rows.data[0].attributes.data_set_items.data;
  const keyValuesArray = DATASETROW.map((item) => item.attributes.Key);

  // state 
  const [titleError, setTitleError] = useState(false);
  const [inputType, setInputType] = useState("static");

  // func
  const validateInput = (input) => {
    const stringValue = input.target.value || "";
    const regex = /^[a-zA-Z0-9 !@#$%^&*()<>?/:;"',.-]+$/;
    return regex.test(stringValue);
  };

  const handleTitleInputChange = (value, isDynamic = false) => {
  //console.log(`is this a dynamic input ${isDynamic ? "true" : "false"}`);
    let newValue;
    let key;
    if (isDynamic) {
      newValue = findValueByKey(DATASETROW, value);
      key = value;
    } else {
      newValue = value;
      key = undefined;
    }

    const isValid = isDynamic ? true : validateInput({ target: { value } });

    if (isValid) {
      let newField = {
        name: fieldName,
        value: newValue,
        dynamic: isDynamic,
        key,
      };

      handleInputChange(newField);
      setTitleError(false);
    } else {
      setTitleError(true);
    }
  };

  function findValueByKey(objArray, targetKey) {
    const targetObj = objArray.find(
      (obj) => obj.attributes.Key.toLowerCase() === targetKey.toLowerCase()
    );
    return targetObj ? targetObj.attributes.Value : null;
  }

  return (
    <>
      <H3>{title}</H3>
      <UIPaperWrapper>
        <Group position="left">
          {inputType === "dynamic" ? (
            <DynamicSelect
              handleChange={(value) => handleTitleInputChange(value, true)}
              keyValuesArray={keyValuesArray}
            />
          ) : (
            <StaticInput
              handleChange={(value) => handleTitleInputChange(value)}
              titleError={titleError}
            />
          )}
        </Group>
        <SwitchDynamicToStatic
          inputType={inputType}
          setInputType={setInputType}
        />
      </UIPaperWrapper>
    </>
  );
};
