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

export const ModuleVideoBackgroundSingleText916 = ({DATA, Duration}) => {
	const STYLE = STYLES.landscape;
	return <ModuleContainer DATA={DATA} Duration={Duration} STYLES={STYLE} />;
};

export const ModuleVideoBackgroundSingleText45 = ({DATA, Duration}) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer DATA={DATA} Duration={Duration} STYLES={STYLE} />;
};

export const ModuleVideoBackgroundSingleTextSQ = ({DATA, Duration}) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer DATA={DATA} Duration={Duration} STYLES={STYLE} />;
};

const ModuleContainer = ({DATA, Duration, STYLES}) => {
	console.log("DATADATA", DATA)
	const frame = useCurrentFrame();
	return (
		<>
			<Sequence>
				<PrebuildSingleTitleInGlassBox
					Title={DATA.Title}
					DATA={DATA}
					frame={frame}
					Duration={Duration}
				/>

				<BackgroundVideoandStyles
					STYLES={STYLES}
					VIDEO={DATA.BackgroundVideo}
				/>
			</Sequence>
		</>
	);
};
