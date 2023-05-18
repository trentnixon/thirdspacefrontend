import { UIPaperWrapper } from "../../../ui/Containers";
import { BTN_FUNC } from "../../../ui/btn";
import { H3, P } from "../../../ui/type";

export const CreateAComp = () => {
  return (
    <>
      <H3>Create a Comp</H3>
      <UIPaperWrapper>
        <P marginBottom={20}>Render out a comp to download and share.</P>
        <BTN_FUNC
          HANDLE={() => {
          //console.log("reate Client Preview");
          }}
          LABEL={`Create Preview`}
        />
      </UIPaperWrapper>
      <H3>Downloadable Comps</H3>
      <UIPaperWrapper>
        <P marginBottom={20}>Previously Created Comps</P>
      </UIPaperWrapper>
    </>
  );
};
