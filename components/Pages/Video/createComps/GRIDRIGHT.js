import { useRouter } from "next/router";
import { Grid } from "@mantine/core";

import { CreateCompInputs } from "./createCompInputs";
import { ListPreviousRenders } from "./listPreviousRenders";
import { useState } from "react";
import { useEffect } from "react";
import { useFetchCompsRelatedToVideo } from "../../../../hooks/Video/useCreateComp";

export const GridRight = (props) => {
  const { handleCreateComp, isComplete } = props;
  const router = useRouter();
  const { id } = router.query;

  const [renderedComps, setrenderedComps] = useState([]);
  const [RelatedStatus, FetchRelated] = useFetchCompsRelatedToVideo();

  useEffect(() => {
    if (RelatedStatus === null ) {
      FetchRelated(id);
    } else {
      setrenderedComps(RelatedStatus);
    }
  }, [RelatedStatus, FetchRelated, id]);

  useEffect(() => {
    if (!isComplete) {
      FetchRelated(id);
    } 
  }, [isComplete]);

  return (
    <Grid.Col
      span={4}
      sx={(theme) => ({
        backgroundColor: theme.colors.background,
      })}
    >
      <CreateCompInputs
        handleCreateComp={handleCreateComp}
        isComplete={isComplete}
      />

      <ListPreviousRenders
        renderedComps={renderedComps}
        isComplete={isComplete}
      />
    </Grid.Col>
  );
};
