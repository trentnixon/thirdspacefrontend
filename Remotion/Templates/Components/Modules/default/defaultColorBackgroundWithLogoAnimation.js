import {Audio, Sequence} from 'remotion';
import {ColorBackgroundandStyles} from '../../Global/components/backgrounds/ColorBackground';
import {BrandLogoAnimateInOut} from '../../Global/components/Images/BrandLogoAnimateInOut';

export const DefaultColorBackgroundWithLogoAnimation916 = ({DATA}) => {
	return <ModuleContainer DATA={DATA} />;
};

export const DefaultColorBackgroundWithLogoAnimation45 = ({DATA}) => {
	return <ModuleContainer DATA={DATA} />;
};

export const DefaultColorBackgroundWithLogoAnimationSQ = ({DATA}) => {
	return <ModuleContainer DATA={DATA} />;
};

const ModuleContainer = ({DATA, AUDIO, STYLES}) => {
	console.log(DATA);
	return (
		<Sequence>
			<BrandLogoAnimateInOut DATA={DATA} />
			<ColorBackgroundandStyles STYLES={STYLES} />
			{AUDIO === null || AUDIO === undefined ? false : <Audio src={AUDIO} />}
		</Sequence>
	);
};
