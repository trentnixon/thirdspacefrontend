import { Grid } from "@mantine/core";
import { UIPaperWrapper } from "../../../ui/Containers";
import { BTN_LINK } from "../../../ui/btn";

export /* ************************************************** */
/// The Grids can stay n this page

const GridLeft = (props) => {
  const { Video } = props;
  return (
    
    <Grid.Col
      span={2}
      sx={(theme) => ({
        backgroundColor: theme.colors.background,
      })}
    >
      <UIPaperWrapper>
        <BTN_LINK LABEL={`BACK`} HREF={`/thirdspace/video/${Video.data.id}`} />
      </UIPaperWrapper>
    </Grid.Col>
  );
};