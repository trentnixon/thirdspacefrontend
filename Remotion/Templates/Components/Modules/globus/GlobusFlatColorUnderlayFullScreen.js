import {Sequence, useCurrentFrame} from 'remotion';
// Import styled from 'styled-components';

import {calculateImageSize} from '../../../../Utils/FUNC/imageFunctions';
import {BackgroundVideoandStyles} from '../../Global/components/backgrounds/VideoBackground';
import {PrebuildFullScreenFlatcolorUnderlaySingleLeadCopyLogo} from '../../Global/prebuilt/Prebuild_FullScreen_FlatcolorUnderlay_SingleLeadCopy_Logo';

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

export const GlobusFlatColorUnderlayFullScreen916 = (
	props
) => {
	const {DATA} = props;
	const STYLE = STYLES.landscape;
	const SIZINGS = {
		LOGO: calculateImageSize(
			DATA?.BrandLogo?.height,
			DATA?.BrandLogo?.width,
			250,
			500
		),
		TITLE: '5em',
		TITLEWIDTH:'50%',
		DISCLAIMER: '1.4em',

	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const GlobusFlatColorUnderlayFullScreen45 = (
	props
) => {
	const {DATA} = props;
	const STYLE = STYLES.portrait;
	const SIZINGS = {
		LOGO: calculateImageSize(
			DATA?.BrandLogo?.height,
			DATA?.BrandLogo?.width,
			250,
			500
		),
		TITLE: '5em',
		TITLEWIDTH:'70%',
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const GlobusFlatColorUnderlayFullScreenSQ = (
	props
) => {
	const {DATA} = props;
	const STYLE = STYLES.portrait;
	const SIZINGS = {
		LOGO: calculateImageSize(
			DATA?.BrandLogo?.height,
			DATA?.BrandLogo?.width,
			400,
			800
		),
		TITLE: '5em',
		TITLEWIDTH:'70%',
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

const ModuleContainer = (props) => {
	const {DATA, STYLES, SIZINGS, Duration, Theme, RESOLUTION} = props;
	const frame = useCurrentFrame();
	return (
		<Sequence>
			<PrebuildFullScreenFlatcolorUnderlaySingleLeadCopyLogo
				SIZINGS={SIZINGS}
				DATA={DATA}
				Duration={Duration}
				Disclaimer={DefaultDisclamer} 
				STYLES={STYLES}
				Theme={Theme}
				frame={frame}
				RESOLUTION={RESOLUTION}
			/>

			<BackgroundVideoandStyles STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />
		</Sequence>
	);
};
