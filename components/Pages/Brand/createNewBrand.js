import { Group } from "@mantine/core";
import { BTN_LINK } from "../../ui/btn";
import { P } from "../../ui/type";

export const CreateNewBrand = (props) => {
  const { handleCreateNewBrand } = props;

  return (
    <>
      <P>Functionality Disabled</P>

      <Group position="right">
        <BTN_LINK HREF={`/thirdspace/brand`} LABEL={`Back`} />
      </Group>
    </>
  );
};
