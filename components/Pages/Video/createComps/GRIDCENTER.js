import { Grid } from "@mantine/core";
import { H2 } from "../../../ui/type";
import { RenderError } from "./renderError";
import { ViewRemotionPreview } from "./viewRemotionPreview";
import { RenderProgressStatus } from "./renderProgressStatus";
import { RenderCompCompleted } from "./renderCompCompleted";
import { useEffect } from "react";

export const GridCenter = (props) => {
  const { rendering, renderState, RenderStatus } = props;

  useEffect(() => {
  //console.log('Render state changed: ', renderState);
  }, [renderState]);
  return (
    <Grid.Col span={6}>
      <H2>Create a Sample Composition</H2>
      {rendering && renderState.isError ? (
        <RenderError renderState={renderState} />
      ) : (
        false
      )}
      {!rendering && <ViewRemotionPreview {...props} />}

      {rendering && !renderState.RenderStatus ? (
        <RenderProgressStatus renderState={renderState} />
      ) : (
        false
      )}

      {rendering && renderState.RenderStatus ? (
        <RenderCompCompleted RenderStatus={RenderStatus} />
      ) : (
        false
      )}
    </Grid.Col>
  );
};
