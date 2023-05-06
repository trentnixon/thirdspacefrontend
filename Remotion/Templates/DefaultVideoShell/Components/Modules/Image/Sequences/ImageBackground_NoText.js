import {Sequence} from 'remotion';
import { ImageBackground } from '../Modules/ImageBackground';

export const ModuleImageBackgroundNoText916 = ({DATA}) => {
	console.log(DATA.BackgroundMediaImage)
	const STYLES = {
		zIndex: 0,
		position: 'absolute',

	};
	return <ModuleContainer STYLES={STYLES} MEDIA={DATA.BackgroundMediaImage} />
};

export const ModuleImageBackgroundNoText45 = ({DATA}) => {
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	};
	return <ModuleContainer STYLES={STYLES} MEDIA={DATA.BackgroundMediaImage} />
};

export const ModuleImageBackgroundNoTextSQ = ({DATA}) => {
	console.log(DATA);
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	};
	return <ModuleContainer STYLES={STYLES} MEDIA={DATA.BackgroundMediaImage} />
};

const ModuleContainer = ({MEDIA, STYLES}) => {
	return (
		<Sequence>
			<ImageBackground STYLES={STYLES} MEDIA={MEDIA}/>
		</Sequence>
	);
};
