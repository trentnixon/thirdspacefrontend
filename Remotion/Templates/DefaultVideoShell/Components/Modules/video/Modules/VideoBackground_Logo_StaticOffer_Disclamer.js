import { useCurrentFrame, Sequence, AbsoluteFill, Video, Img } from "remotion";
// Import styled from 'styled-components';

import {
  ContainerTransparentColumn,
  DefaultContainer,
} from "../../../../../../Utils/UI/Containers/glass";

import { FromMiddle } from "../../../../../../Utils/Animations/ClipWipe";
import { interpolateOpacityByFrame } from "../../../../../../Utils/Animations/interpolate";
import { calculateImageSize } from "../../../../../../Utils/FUNC/imageFunctions";
import { P } from "../../../../../../Utils/UI/Static_Copy";
import { TitleFadeandScale } from "../../../../../../Utils/UI/Copy/Titles";
import { AnimateElement } from "../../../../../../Utils/Animations/RemotionAnimate";
import { getProperty } from "../../../../../../Utils/FUNC/helpers";

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

const DefaultDisclamer = `The views and opinions expressed in this TV commercial are solely
those of the advertiser and do not necessarily reflect the views and
opinions of the network or its affiliates.`;

export const ModuleVideoBackgroundLogoStaticOfferDisclamer916 = ({
  DATA,
  Duration,
}) => {
  //console.log(DATA);
  /* if(!DATA?.BrandLogo) return  */
  const STYLE = STYLES.landscape;
  const SIZINGS = {
    LOGO: calculateImageSize(
		DATA?.BrandLogo?.height,
		DATA?.BrandLogo?.width,
      250,
      500
    ),
    TITLE: "6.5em",
    DISCLAIMER: "1.4em",
  };

  return (
    <ModuleContainer
      DATA={DATA}
      STYLES={STYLE}
      SIZINGS={SIZINGS}
      Duration={Duration}
    />
  );
};

export const ModuleVideoBackgroundLogoStaticOfferDisclamer45 = ({
  DATA,
  Duration,
}) => {
  const STYLE = STYLES.portrait;
  const SIZINGS = {
    LOGO: calculateImageSize(
		DATA?.BrandLogo?.height,
		DATA?.BrandLogo?.width,
      250,
      500
    ),
    TITLE: "6.5em",
    DISCLAIMER: "1.4em",
  };

  return (
    <ModuleContainer
      DATA={DATA}
      STYLES={STYLE}
      SIZINGS={SIZINGS}
      Duration={Duration}
    />
  );
};

export const ModuleVideoBackgroundLogoStaticOfferDisclamerSQ = ({
  DATA,
  Duration,
}) => {
  const STYLE = STYLES.portrait;
  const SIZINGS = {
    LOGO: calculateImageSize(
		DATA?.BrandLogo?.height,
		DATA?.BrandLogo?.width,
      400,
      800
    ),
    TITLE: "10em",
    DISCLAIMER: "1.4em",
  };

  return (
    <ModuleContainer
      DATA={DATA}
      STYLES={STYLE}
      SIZINGS={SIZINGS}
      Duration={Duration}
    />
  );
};

const ModuleContainer = ({ DATA, STYLES, SIZINGS, Duration }) => {
  return (
    <Sequence>
      <DefaultContainer>
        {DATA?.BrandLogo === undefined ? (
          false
        ) : (
          <div
            style={{
              position: "absolute",
              top: `calc(50% - ${SIZINGS.LOGO.height}px )`,
              left: "50%",
              transform: "translateX(-50%)",
              transformOrigin: "center center",
            }}
          >
            <AnimateElement
              In={0}
              Out={Duration - 15}
              ANIMATEIN="FadeInMoveDown"
              ANIMATEINOUT="FadeOutMoveUp"
            >
              <Img
                src={`${DATA.BrandLogo.URL}`}
                height={SIZINGS.LOGO.height}
                width={SIZINGS.LOGO.width}
              />
            </AnimateElement>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            top: "calc(50%)",
            left: "50%",
            transform: "translateX(-50%)",
            transformOrigin: "center center",
            width: "100%",
          }}
        >
          <AnimateElement
            In={15}
            Out={Duration - 15}
            ANIMATEIN="FadeInScale"
            ANIMATEINOUT="FadeOutMoveDown"
          >
            <P
              size={SIZINGS.TITLE}
              margin=".3em 0 0 0"
              color="#fff"
              weight={100}
              letterSpacing="2px"
            >
              <span style={{ fontWeight: 900 }}>{DATA.Title}</span>
            </P>
          </AnimateElement>
        </div>
      </DefaultContainer>
      <ContainerTransparentColumn>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
          }}
        >
          <P
            lineHeight="1em"
            size={SIZINGS.DISCLAIMER}
            margin="1em 0 0 0"
            color="#fff"
            weight={100}
          >
            {DefaultDisclamer}
          </P>
        </div>
      </ContainerTransparentColumn>
      <AbsoluteFill style={STYLES}>
        <Video volume={0} src={DATA.BackgroundVideo} />
      </AbsoluteFill>
    </Sequence>
  );
};
