import {Sequence, AbsoluteFill, Video } from 'remotion';
export const ModuleVideoBackgroundNoText916 = ({DATA}) => {
	const STYLES = {
		zIndex: 0,
		position: 'absolute',

	};
	return <ModuleContainer STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />
};

export const ModuleVideoBackgroundNoText45 = ({DATA}) => {
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	};
	return <ModuleContainer STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />
};

export const ModuleVideoBackgroundNoTextSQ = ({DATA}) => {
	//console.log(DATA);
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	};
	return <ModuleContainer STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />
};

const ModuleContainer = ({VIDEO, STYLES}) => {


	return (
		<Sequence>
			<AbsoluteFill style={STYLES}>
				<Video volume={0} src={VIDEO} />
			</AbsoluteFill>
		</Sequence>
	);
};
