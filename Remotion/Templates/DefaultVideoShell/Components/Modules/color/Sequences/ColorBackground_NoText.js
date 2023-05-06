import {Sequence} from 'remotion';
import { ColorBackground } from '../Modules/ColorBackground';

export const ModuleColorBackgroundNoText916 = ({DATA}) => {
	console.log(DATA.BackgroundMediaColor)
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
    backgroundColor: DATA.BackgroundMediaColor

	};
	return <ModuleContainer STYLES={STYLES}  />
};

export const ModuleColorBackgroundNoText45 = ({DATA}) => {
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
    backgroundColor: DATA.BackgroundMediaColor
	};
	return <ModuleContainer STYLES={STYLES}  />
};

export const ModuleColorBackgroundNoTextSQ = ({DATA}) => {
	console.log(DATA);
	const STYLES = {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
    backgroundColor: DATA.BackgroundMediaColor
	};
	return <ModuleContainer STYLES={STYLES}  />
};

const ModuleContainer = ({MEDIA, STYLES}) => {
	return (
		<Sequence>
			<ColorBackground STYLES={STYLES} MEDIA={MEDIA}/>
		</Sequence>
	);
};
