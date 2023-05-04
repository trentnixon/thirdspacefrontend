import { RemotionPlayer } from "../../../components/Pages/Video/Player";
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";
import MembersShell from "../../../components/template/MembersShell";
import { H1 } from "../../../Remotion/Utils/UI/Static_Copy";
import { BTN_LINK } from "../../../components/ui/btn";

const Video = () => {
  const theme = useMantineTheme();
  const PRIMARY_COL_HEIGHT = 300;
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <MembersShell>
      <H1>Videos</H1>
      <BTN_LINK 
          LABEL={`Create`}
          HREF={`/thirdspace/video/create`}
      />
    </MembersShell>
  );
};

export default Video;
