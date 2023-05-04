import {useCurrentFrame, Sequence} from 'remotion';
import {BackgroundVideoandStyles} from '../Modules/ImportBackgroundVideoandStyles';
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

export const ModuleVideoBackgroundSingleText916 = (props) => {
	const STYLE = STYLES.landscape;
	return <ModuleContainer {...props} STYLES={STYLE} />;
};

export const ModuleVideoBackgroundSingleText45 = (props) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer {...props} STYLES={STYLE} />;
};

export const ModuleVideoBackgroundSingleTextSQ = (props) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer {...props} STYLES={STYLE} />;
};

const ModuleContainer = (props) => {
	const {DATA, Duration, STYLES, Theme} = props
	// Console.log("Theme", Theme)
	const frame = useCurrentFrame();
	return (
		<>
			<Sequence>
				<PrebuildSingleTitleInGlassBox
					Title={DATA.Title}
					DATA={DATA}
					frame={frame}
					Duration={Duration}
					Theme={Theme}
				/>
 
				<BackgroundVideoandStyles
					STYLES={STYLES}
					VIDEO={DATA.BackgroundVideo}
				/>
			</Sequence>
		</>
	);
};
