import { Container, Group } from "@mantine/core";
import { UploadNewDataset } from "../../../components/Pages/Dataset/CreateNewDataset";
import MembersShell from "../../../components/template/MembersShell";
import { PREBUILT_BACKBTN } from "../../../components/ui/btn";
import { H1, P } from "../../../components/ui/type";
import { useRouter } from "next/router";
const CreateNewDataset = () => {
  const router = useRouter();
//console.log(router.query.id);

  return (
    <MembersShell>
      <Container size={"xl"}>
        <Group position="right">
          <PREBUILT_BACKBTN />
        </Group>
        <H1>Create a Dataset</H1>
        {router.query.id === undefined ? (
          <NoCampaign />
        ) : (
          <UploadNewDataset ASSIGNTO={router.query.id} />
        )}
      </Container>
    </MembersShell>
  );
};

export default CreateNewDataset;

const NoCampaign = () => {
  return <P>No Campaign ID Found</P>;
};
