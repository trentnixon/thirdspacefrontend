import { DynamicTextInput } from "../../Controllers/DynamicTextInput";
export const Title = (props) => {
  const { handleInputChange, PlaceHolder, dataset, CreateSequenceOBJ } = props;
  return (
    <DynamicTextInput
      handleInputChange={handleInputChange}
      PlaceHolder={PlaceHolder}
      dataset={dataset}
      CreateSequenceOBJ={CreateSequenceOBJ}
      title="Add a Title"
    />
  );
};