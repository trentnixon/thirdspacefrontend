import { Box, Group } from "@mantine/core";
import { BTN_LINK } from "../../../../ui/btn";

export const BackToListBtn = ({ HREF }) => {
  return (
    <BTN_LINK LABEL={`Cancel`} HREF={HREF} />
  );
};
