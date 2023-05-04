import { Container, Group } from "@mantine/core";
import MembersShell from "../../../components/template/MembersShell";
import { BTN_LINK } from "../../../components/ui/btn";
import { H1, P } from "../../../components/ui/type";

const CreateNewAsset = () => {
  return (
    <MembersShell>
      <Container size={"xl"}>
        <Group position="right">
          <BTN_LINK HREF={`/thirdspace/`} LABEL={`Back`} />
        </Group>
        <H1>Create a Asset</H1>
        <P>This feature is currently disabled</P>
      </Container>
    </MembersShell>
  );
};

export default CreateNewAsset;