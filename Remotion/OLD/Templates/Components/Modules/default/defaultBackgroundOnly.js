import {Sequence} from 'remotion';
import {BackgroundVideoandStyles} from '../../Global/components/backgrounds/VideoBackground';

export const DefaultBackgroundOnly916 = ({DATA}) => {
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
	};
	return <ModuleContainer STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />;
};

export const DefaultBackgroundOnly45 = ({DATA}) => {
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	};
	return <ModuleContainer STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />;
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
	return <ModuleContainer STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />;
};

const ModuleContainer = ({VIDEO, STYLES}) => {
	return (
		<Sequence>
			<BackgroundVideoandStyles STYLES={STYLES} VIDEO={VIDEO} />
		</Sequence>
	);
};
