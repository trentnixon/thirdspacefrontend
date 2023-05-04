import { Container, Group } from "@mantine/core";
import MembersShell from "../../../components/template/MembersShell";
import { BTN_LINK } from "../../../components/ui/btn";
import { H1, P } from "../../../components/ui/type";

const CreateNewCampaign = () => {
  return (
    <MembersShell>
      <Container size={"xl"}>
        <Group position="right">
          <BTN_LINK HREF={`/thirdspace/campaign`} LABEL={`Back`} />
        </Group>
        <H1>Create a Campaign</H1>
        <P>This feature is currently disabled</P>
      </Container>
    </MembersShell>
  );
};

export default CreateNewCampaign;
