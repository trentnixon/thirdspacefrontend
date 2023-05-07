import {useCurrentFrame, Sequence} from 'remotion';
import {ImageBackground} from '../Modules/ImageBackground';
import {PrebuildSingleTitleInGlassBox} from '../../../Global/prebuilt/SingleTitleInGlassBox';

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

export const ModuleImageBackgroundSingleText916 = (props) => {
	
	const STYLE = STYLES.landscape;
	return <ModuleContainer {...props} STYLES={STYLE} />;
};

export const ModuleImageBackgroundSingleText45 = (props) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer {...props} STYLES={STYLE} />;
};

export const ModuleImageBackgroundSingleTextSQ = (props) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer {...props} STYLES={STYLE} />;
};

const ModuleContainer = (props) => {
	const {DATA} = props; 
	const frame = useCurrentFrame();
	return (
		<Sequence>
			<PrebuildSingleTitleInGlassBox
				Title={DATA.Title}
				frame={frame}
				{...props}
			/>
			<ImageBackground MEDIA={DATA.BackgroundMediaImage} {...props} />
		</Sequence>
	);
};
