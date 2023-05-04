import { Group, TextInput, useMantineTheme } from "@mantine/core";
import { IconWriting } from "@tabler/icons-react";
import { UIPaperWrapper } from "../../../../ui/Containers";
import { H3 } from "../../../../ui/type";
import { useState } from "react";
import { DynamicTextInput } from "./Controllers/DynamicTextInput";

export const StaticOffer = (props) => {
  const { handleInputChange, PlaceHolder, dataset,CreateSequenceOBJ } = props;
  return (
    
    <DynamicTextInput
      handleInputChange={handleInputChange}
      PlaceHolder={PlaceHolder}
      dataset={dataset}
      CreateSequenceOBJ={CreateSequenceOBJ}
      title="Centered Copy"
    />
  );
};
