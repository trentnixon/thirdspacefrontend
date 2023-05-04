import { Group } from "@mantine/core";
import { BTN_FUNC } from "../../ui/btn";
import { P } from "../../ui/type";

export const CreateNewCampaign = (props) => {
  const { handleCreateNewCampaign } = props;

  return (
    <>
      <P>Functionality Disabled</P>

      <Group position="right">
        <BTN_FUNC LABEL={`Back`} HANDLE={handleCreateNewCampaign} />
      </Group>
    </>
  );
};
