import {useCurrentFrame, Sequence} from 'remotion';
import {ImageBackground} from '../Modules/ImageBackground';
import { PrebuildSingleTitleInGlassBox } from '../../../Global/prebuilt/SingleTitleInGlassBox';

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

export const ModuleImageBackgroundSingleText916 = ({DATA, Duration}) => {
	const STYLE = STYLES.landscape;
	return <ModuleContainer DATA={DATA} Duration={Duration} STYLES={STYLE} />;
};

export const ModuleImageBackgroundSingleText45 = ({DATA, Duration}) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer DATA={DATA} Duration={Duration} STYLES={STYLE} />;
};

export const ModuleImageBackgroundSingleTextSQ = ({DATA, Duration}) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer DATA={DATA} Duration={Duration} STYLES={STYLE} />;
};

const ModuleContainer = ({DATA, Duration, STYLES}) => {
	const frame = useCurrentFrame();
	return (
		<>
			<Sequence>
        <PrebuildSingleTitleInGlassBox Title={DATA.Title} frame={frame} Duration={Duration}/>
				<ImageBackground STYLES={STYLES} MEDIA={DATA.BackgroundMediaImage} />
			</Sequence>
		</>
	);
};
