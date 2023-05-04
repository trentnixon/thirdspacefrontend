// PACKAGES
import { Select } from "@mantine/core";

export const SelectRatio = ({ setRatioValue }) => {
    return (
      <Select
        placeholder="Select Preview Ratio"
        onChange={setRatioValue}
        data={[
          { value: "VideoShell916", label: "9:16" },
          { value: "VideoShell45", label: "4:5 " },
          { value: "VideoShellSQ", label: "1:1" },
        ]}
      />
    );
  };