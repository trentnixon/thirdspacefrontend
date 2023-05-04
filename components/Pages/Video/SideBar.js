import { Stack } from "@mantine/core";
import { BTN_FUNC } from "../../ui/btn";
import { H1 } from "../../ui/type";

//setSequence={setSequence} Sequence={Sequence}
export const SideBar = (props) => {
  const { setSequence, Sequence } = props;

  return (
    <>
      <Stack>
        <BTN_FUNC
          LABEL={Sequence ? `Preview` : `Add Sequence`}
          HANDLE={() => {
            setSequence(!Sequence);
          }}
        />
        <BTN_FUNC LABEL={`Upload Assets`} HANDLE={() => {}} />
        <BTN_FUNC LABEL={`Review Dataset`} HANDLE={() => {}} />
      </Stack>
    </>
  );
};
