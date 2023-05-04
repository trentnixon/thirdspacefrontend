import {useCurrentFrame} from 'remotion';
import {Sequence} from 'remotion';
import {ImageBackground} from '../Modules/ImageBackground';

export const ModuleImageBackgroundNoText916 = (props) => {
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
	};
	return <ModuleContainer STYLES={STYLES} {... props} />;
};

export const ModuleImageBackgroundNoText45 = (props) => {
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	};
	return <ModuleContainer STYLES={STYLES} {... props} />;
};

export const ModuleImageBackgroundNoTextSQ = (props) => {

	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	};
	return <ModuleContainer STYLES={STYLES} {... props} />;
};

const ModuleContainer = (props) => {
	const {DATA} = props;
	return (
		<Sequence>
			<ImageBackground MEDIA={DATA.BackgroundMediaImage} {...props} />
		</Sequence>
	);
};
