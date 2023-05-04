import { Container, Group } from "@mantine/core";
import { UploadNewDataset } from "../../../components/Pages/Dataset/CreateNewDataset";
import MembersShell from "../../../components/template/MembersShell";
import { BTN_LINK } from "../../../components/ui/btn";
import { H1, P } from "../../../components/ui/type";

const CreateNewDataset = () => {
  return (
    <MembersShell>
      <Container size={"xl"}>
        <Group position="right">
          <BTN_LINK HREF={`/thirdspace/`} LABEL={`Back`} />
        </Group>
        <H1>Create a Dataset</H1>
        <P>This feature is currently disabled</P>
        <UploadNewDataset />
      </Container>
    </MembersShell>
  );
};

export default CreateNewDataset;


