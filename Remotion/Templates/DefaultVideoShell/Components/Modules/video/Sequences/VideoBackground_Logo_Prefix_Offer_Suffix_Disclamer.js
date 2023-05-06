import {Sequence} from 'remotion';
// Import styled from 'styled-components';

import {calculateImageSize} from '../../../../../../Utils/FUNC/imageFunctions';
import {BackgroundVideoandStyles} from '../Modules/ImportBackgroundVideoandStyles';
import {PreBuildPrefixVariableSuffixLogoDisclaimer} from '../../../Global/prebuilt/PrebuildPrefixVariableSuffixLogoDisclaimer';

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

export const ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamer916 = ({
	DATA,
	Duration,
}) => {
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
			Duration={Duration}
		/>
	);
};

export const ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamer45 = ({
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
		TITLE: '6.5em',
		DISCLAIMER: '1.4em',
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

export const ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamerSQ = ({
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
		TITLE: '10em',
		DISCLAIMER: '1.4em',
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

const ModuleContainer = ({DATA, STYLES, SIZINGS, Duration}) => {
	console.log(DATA);
	return (
		<Sequence>
			<PreBuildPrefixVariableSuffixLogoDisclaimer
				SIZINGS={SIZINGS}
				DATA={DATA}
				Duration={Duration}
				Disclaimer={DefaultDisclamer}
				STYLES={STYLES}
			/>

			<BackgroundVideoandStyles STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />
		</Sequence>
	);
};
