import { TextInput } from "@mantine/core";

export const StaticInput = (props) => {
    const { handleChange, titleError } = props;
    return (
      <>
        <TextInput
          placeholder="Title"
          label="Title"
          error={titleError}
          onChange={(event) => handleChange(event.target.value)}
          style={{ width: "100%" }}
        />
      </>
    );
  };