import {Sequence} from 'remotion';
// Import styled from 'styled-components';
import {calculateImageSize} from '../../../../../Utils/FUNC/imageFunctions';
import {PreBuildMainTitleCenteredLogoBottomDisclaimer} from '../../../Global/prebuilt/MaintitleCenteredLogoSmallDisclaimer';
import {ImageBackground} from '../Modules/ImageBackground';

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

	return (
		<ModuleContainer
			DATA={DATA}
			STYLES={STYLE}
			SIZINGS={SIZINGS}
		/>
	);
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

	return <ModuleContainer DATA={DATA} STYLES={STYLE} SIZINGS={SIZINGS} />;
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
	const DefaultDisclamer = `The views and opinions expressed in this TV commercial are solely
those of the advertiser and do not necessarily reflect the views and
opinions of the network or its affiliates.`;

	return (
		<Sequence>
			<PreBuildMainTitleCenteredLogoBottomDisclaimer
				{...props}
				COPY={DefaultDisclamer}
			/>
			<ImageBackground
				STYLES={STYLES}
				MEDIA={DATA.BackgroundMediaImage}
				{...props}
			/>
		</Sequence>
	);
};
