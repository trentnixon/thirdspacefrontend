import { Group, Paper, ScrollArea, useMantineTheme } from "@mantine/core";
import { UIPaperWrapper } from "../../../ui/Containers";
import { P } from "../../../ui/type";

export const SequenceLocation = (props) => {
  const { setOBJ, OBJ, VideoOBJ } = props;
  const theme = useMantineTheme();
//console.log(VideoOBJ.Series);
  return (
    <>
      <P>Sequence Location</P>

      <UIPaperWrapper>
        <ScrollArea>
          <Group noWrap={true}>
            {VideoOBJ.Series.map((series, i) => {
              return (
                <UIPaperWrapper backgroundColor={0} key={i}>
                  <P>{series.Name}</P>
                </UIPaperWrapper>
              );
            })}
          </Group>
        </ScrollArea>
      </UIPaperWrapper>
    </>
  );
};
