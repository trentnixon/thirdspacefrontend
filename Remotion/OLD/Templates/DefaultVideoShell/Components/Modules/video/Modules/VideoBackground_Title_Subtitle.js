import { Sequence, AbsoluteFill, Video } from "remotion";
import styled from "styled-components";
import { P } from "../../../../../../Utils/UI/Static_Copy";

import { Subtitle } from "../../../../../../Utils/UI/Subtitle";
import { Title } from "../../../../../../Utils/UI/Title";

const STYLES = {
  landscape: { zIndex: 0, position: "absolute" },
  portrait: {
    zIndex: 0,
    position: "absolute",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
};

export const ModuleVideoBackgroundTitleSubtitle916 = ({ DATA }) => {
  const STYLE = STYLES.landscape;
  return <ModuleContainer DATA={DATA} STYLES={STYLE} />;
};

export const ModuleVideoBackgroundTitleSubtitle45 = ({ DATA }) => {
  const STYLE = STYLES.portrait;
  return <ModuleContainer DATA={DATA} STYLES={STYLE} />;
};

export const ModuleVideoBackgroundTitleSubtitleSQ = ({ DATA }) => {
  const STYLE = STYLES.portrait;
  return <ModuleContainer DATA={DATA} STYLES={STYLE} />;
};

const ModuleContainer = ({ DATA, STYLES }) => {
  const SIZINGS = {
    TITLE: "6.5em",
    DISCLAIMER: "1.4em",
  };
  return (
    <>
      <CenterTitles>
        <Sequence>
          <P
            size={SIZINGS.TITLE}
            margin=".3em 0 0 0"
            color="#fff"
            weight={100}
            letterSpacing="2px"
          >
            <span style={{ fontWeight: 900 }}>{DATA.Title}</span>
          </P>
        </Sequence>
        <Sequence from={35}>
          <P
            size={SIZINGS.TITLE}
            margin=".3em 0 0 0"
            color="#fff"
            weight={100}
            letterSpacing="2px"
          >
            <span style={{ fontWeight: 900 }}>{DATA.Title}</span>
          </P>
        </Sequence>
      </CenterTitles>
      <AbsoluteFill style={STYLES}>
        <Video volume={0} src={DATA.BackgroundVideo} />
      </AbsoluteFill>
    </>
  );
};

const CenterTitles = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
