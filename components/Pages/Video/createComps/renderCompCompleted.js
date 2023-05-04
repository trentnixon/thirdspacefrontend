import { UIPaperWrapper } from "../../../ui/Containers";
import { BTN_FUNC } from "../../../ui/btn";
import { P } from "../../../ui/type";

export const RenderCompCompleted = (props) => {
  const { RenderStatus } = props;
  const OpenVideoInWIndow = (url) => {
    window.open(url);
  };
  return (
    <UIPaperWrapper>
      <P>Video rendering complete! Click the button to download.</P>
      <BTN_FUNC
        LABEL={`Download`}
        HANDLE={() => {
          OpenVideoInWIndow(RenderStatus.Download);
        }}
      />
    </UIPaperWrapper>
  );
};
