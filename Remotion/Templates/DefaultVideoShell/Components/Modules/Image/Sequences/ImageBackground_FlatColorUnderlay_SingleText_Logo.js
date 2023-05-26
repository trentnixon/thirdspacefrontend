import {Sequence, useCurrentFrame} from 'remotion';
// Import styled from 'styled-components';

import {calculateImageSize} from '../../../../../../Utils/FUNC/imageFunctions';
// Import {BackgroundVideoandStyles} from '../Modules/ImportBackgroundVideoandStyles';
import {ImageBackgroundPush} from '../Modules/ImageBackground';
import {PreBuildFlatColorUnderlaySingleLeadCopyLogo} from '../../../Global/prebuilt/Prebuild_FlatcolorUnderlay_SingleLeadCopy_Logo';

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

export const ModuleImageBackgroundLogoFlatColorUnderlayWithLogo916 = (
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
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const ModuleImageBackgroundLogoFlatColorUnderlayWithLogo45 = (props) => {
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
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const ModuleImageBackgroundLogoFlatColorUnderlayWithLogoSQ = (props) => {
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
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

const ModuleContainer = (props) => {
	const {DATA, STYLES, SIZINGS, Duration, Theme, RESOLUTION} = props;
	const frame = useCurrentFrame();
	return (
		<Sequence>
			<PreBuildFlatColorUnderlaySingleLeadCopyLogo
				SIZINGS={SIZINGS}
				DATA={DATA}
				Duration={Duration}
				STYLES={STYLES}
				Theme={Theme}
				frame={frame}
				RESOLUTION={RESOLUTION}
			/>
			<ImageBackgroundPush MEDIA={DATA.BackgroundMediaImage} {...props} />
		</Sequence>
	);
};
