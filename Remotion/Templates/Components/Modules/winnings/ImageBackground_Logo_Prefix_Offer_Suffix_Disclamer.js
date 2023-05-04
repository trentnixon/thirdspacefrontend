import {Sequence} from 'remotion';
// Import styled from 'styled-components';

import {calculateImageSize} from '../../../../Utils/FUNC/imageFunctions';
import {ImageBackground} from '../../Global/components/backgrounds/ImageBackground';
import {PackageLogoandOffer} from './sequencePackages/PackageLogoandOffer';

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

export const WinningsLogoAndOfferIMG916 = (props) => {
	const {DATA} = props;
	const STYLE = STYLES.landscape;
	const SIZINGS = {
		LOGO: calculateImageSize(
			DATA?.BrandLogo?.height,
			DATA?.BrandLogo?.width,
			250,
			500
		),
		TITLE: '6.5em',
		DISCLAIMER: '1.8em', 
	}; 

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const WinningsLogoAndOfferIMG45 = (props) => {
	const {DATA} = props;
	const STYLE = STYLES.portrait;
	const SIZINGS = {
		LOGO: calculateImageSize(
			DATA?.BrandLogo?.height,
			DATA?.BrandLogo?.width,
			250,
			500
		),
		TITLE: '5.2em',
		DISCLAIMER: '2em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const WinningsLogoAndOfferIMGSQ = (props) => {
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
		DISCLAIMER: '3em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

const ModuleContainer = (props) => {
	const {DATA, STYLES, SIZINGS, Duration, Theme} = props;
	 console.log(DATA.BackgroundMediaImage);

	return (
		<Sequence>
			<PackageLogoandOffer 
				SIZINGS={SIZINGS}
				DATA={DATA}
				Duration={Duration}
				Disclaimer={DefaultDisclamer}
				STYLES={STYLES}
				Theme={Theme}
			/>

    <ImageBackground MEDIA={DATA.BackgroundMediaImage} {...props} /> 
		</Sequence>
	);
};
 