import {Sequence} from 'remotion';
// Import styled from 'styled-components';
import {calculateImageSize} from '../../../../Utils/FUNC/imageFunctions';
import {BackgroundVideoandStyles} from '../../Global/components/backgrounds/VideoBackground';
import {PreBuildMainTitleCenteredLogoBottomDisclaimer} from '../../Global/prebuilt/MaintitleCenteredLogoSmallDisclaimer';

const STYLES = {
	landscape: {zIndex: 0, position: 'absolute'},
	portrait: {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
};

const DefaultDisclamer = `The views and opinions expressed in this TV commercial are solely
those of the advertiser and do not necessarily reflect the views and
opinions of the network or its affiliates.`;

export const ModuleVideoBackgroundLogoStaticOfferDisclamer916 = (props) => {
	const {DATA} = props;
	/* If(!DATA?.BrandLogo) return  */
	const STYLE = STYLES.landscape;
	const SIZINGS = {
		LOGO: calculateImageSize(
			DATA?.BrandLogo?.height,
			DATA?.BrandLogo?.width,
			250,
			500
		),
		TITLE: '6.5em',
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const ModuleVideoBackgroundLogoStaticOfferDisclamer45 = (props) => {
	const {DATA} = props;
	const STYLE = STYLES.portrait;
	const SIZINGS = {
		LOGO: calculateImageSize(
			DATA?.BrandLogo?.height,
			DATA?.BrandLogo?.width,
			250,
			500
		),
		TITLE: '6.5em',
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const ModuleVideoBackgroundLogoStaticOfferDisclamerSQ = (props) => {
	const {DATA} = props;
	const STYLE = STYLES.portrait;
	const SIZINGS = {
		LOGO: calculateImageSize(
			DATA?.BrandLogo?.height,
			DATA?.BrandLogo?.width,
			400,
			800
		),
		TITLE: '10em',
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

const ModuleContainer = (props) => {
	const {DATA, STYLES, SIZINGS, Duration,Theme} = props
	return (
		<Sequence>
			<PreBuildMainTitleCenteredLogoBottomDisclaimer
				SIZINGS={SIZINGS}
				DATA={DATA}
				Duration={Duration}
				COPY={DefaultDisclamer}
				Theme={Theme}
			/>

			<BackgroundVideoandStyles STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />
		</Sequence>
	);
};
