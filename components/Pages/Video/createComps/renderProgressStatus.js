import { Progress } from "@mantine/core";
import { UIPaperWrapper } from "../../../ui/Containers";
import { P } from "../../../ui/type";
import { useEffect } from "react";

export const RenderProgressStatus = (props) => {
  const { renderState } = props;
  const renderStatusText = () => {
    switch (renderState.status) {
      case "entry":
        return "";
      case "awaitRender":
        return `Rendering progress: ${renderState.progress}%`;
      case "complete":
        return "Rendering complete!";
      default:
        return "";
    }
  };

  useEffect(() => {
    console.log("Render state changed: ", renderState);
  }, [renderState]);

  return (
    <UIPaperWrapper>
      <P>
        {renderState.progress === 0
          ? ` Please wait whilst we wake up the assembler ... `
          : renderStatusText()}
      </P>
      <Progress
        color="yellow"
        radius="xl"
        size="xl"
        mt={20}
        value={renderState.progress}
        label={`${renderState.progress}%`}
        striped
        animate
      />

    </UIPaperWrapper>
  );
};
