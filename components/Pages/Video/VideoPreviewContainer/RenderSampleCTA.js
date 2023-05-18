import { Group } from "@mantine/core";
import { UIPaperWrapper } from "../../../ui/Containers";
import { BTN_LINK } from "../../../ui/btn";
import { useRouter } from "next/router";

export const RenderSampleCTA= (props) => {
  const { Videoid } = props;
  const router = useRouter();
//console.log(router.pathname);
  return (
    <UIPaperWrapper>
      <Group position="left">
        <BTN_LINK
          HREF={`/thirdspace/video/${Videoid}/comp/`}
          LABEL={`Render Sample`}
        />
      </Group>
    </UIPaperWrapper>
  );
};
