import { Group } from "@mantine/core";
import { BTN_FUNC } from "../../../../ui/btn";

export const SaveToComposition = ({
  handleAddSequence,
  CreateSequenceOBJ,
  VideoModule,
}) => {
  function hasKey(obj, key) {
    return obj.DATA.fields && obj.DATA.fields.some((field) => field.name === key);
  }

  function allValuesPresentAsKeys(obj) {
    const placeholders = VideoModule.attributes.video_placeholders.data;

    for (let i = 0; i < placeholders.length; i++) {
      const key = placeholders[i].attributes.ComponentName;
      if (!hasKey(obj, key)) {
        return false;
      }
    } 
    return true;
  }

  return (
    <BTN_FUNC
      LABEL={`Save`}
      isDisabled={!allValuesPresentAsKeys(CreateSequenceOBJ)}
      HANDLE={() => {
        handleAddSequence(CreateSequenceOBJ);
      }}
    />
  );
};
