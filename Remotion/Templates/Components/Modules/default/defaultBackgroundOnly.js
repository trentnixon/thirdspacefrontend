import {Audio, Sequence} from 'remotion';
import {BackgroundVideoandStyles} from '../../Global/components/backgrounds/VideoBackground';

export const DefaultBackgroundOnly916 = ({DATA}) => {
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
	};

	return (
		<ModuleContainer
			STYLES={STYLES}
			AUDIO={DATA.BackgroundAudio}
			VIDEO={DATA.BackgroundVideo}
		/>
	);
};

export const DefaultBackgroundOnly45 = ({DATA}) => {
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	};
	return (
		<ModuleContainer
			STYLES={STYLES}
			AUDIO={DATA.BackgroundAudio}
			VIDEO={DATA.BackgroundVideo}
		/>
	);
};

export const DefaultBackgroundOnlySQ = ({DATA}) => {
	// Console.log(DATA);
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	};
	return (
		<ModuleContainer
			STYLES={STYLES}
			AUDIO={DATA.BackgroundAudio}
			VIDEO={DATA.BackgroundVideo}
		/>
	);
};

const ModuleContainer = ({VIDEO, AUDIO, STYLES}) => {
	console.log(AUDIO)
	return (
		<Sequence>
			<BackgroundVideoandStyles STYLES={STYLES} VIDEO={VIDEO} />
			{AUDIO === null || AUDIO === undefined ? false : <Audio src={AUDIO} /> }
		</Sequence>
	);
};
