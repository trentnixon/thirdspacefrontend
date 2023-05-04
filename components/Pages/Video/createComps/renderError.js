import { UIPaperWrapper } from "../../../ui/Containers";
import { P } from "../../../ui/type";

export const RenderError = (props) => {
  const { renderState } = props;
  return (
    <UIPaperWrapper>
      <P>Error: {renderState.errorMessage}</P>
    </UIPaperWrapper>
  );
};
