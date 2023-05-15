import { Container, Group } from "@mantine/core";
import MembersShell from "../../../../components/template/MembersShell";
import { BTN_FUNC, BTN_LINK, PREBUILT_BACKBTN } from "../../../../components/ui/btn";
import { H1, P } from "../../../../components/ui/type";
import { useRouter } from 'next/router'
const CreateNewBrand = () => {
  const router = useRouter()
  return (
    <MembersShell>
      <Container size={"xl"}>
        <Group position="right">
          <PREBUILT_BACKBTN />
        </Group>
        <H1>Manage Brand Settings</H1>
        <P>This feature is currently disabled</P>
      </Container>
    </MembersShell>
  );
};

export default CreateNewBrand;