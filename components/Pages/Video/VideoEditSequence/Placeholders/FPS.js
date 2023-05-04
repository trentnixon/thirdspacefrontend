import { Group, Slider } from "@mantine/core";
import { useEffect, useState } from "react";
import { UIPaperWrapper } from "../../../../ui/Containers";
import { H3, P } from "../../../../ui/type";

export const SelectFPS = (props) => {
  const { OBJ, setOBJ } = props;
  const [value, setValue] = useState(50);
  const OBJTITLE = "Duration";

  useEffect(() => {
    setOBJ({
      ...OBJ,
      DATA: {
        ...OBJ.DATA,
        [OBJTITLE]: value * 3,
      },
    });
  }, [value]);

  const CreateFrames = () => {
    let num = 1;
    const arr = [];

    while (num <= 10) {
      arr.push({ value: num * 10, label: num * 30 });
      num++;
    }
    return arr;
  };

  return (
    <>
      <Group position="apart" my={10}>
        <H3>What is the Length of this sequence?</H3>
        <P>{(value * 30) / 300} Seconds</P>
      </Group>
      <UIPaperWrapper>
        <Slider
          label={null}
          value={value}
          onChange={setValue}
          marks={CreateFrames()}
          my={20}
        />
      </UIPaperWrapper>
    </>
  );
};
