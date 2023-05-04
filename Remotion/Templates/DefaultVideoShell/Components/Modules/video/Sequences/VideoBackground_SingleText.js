import {useCurrentFrame, Sequence} from 'remotion';

import {VerticalDrop} from '../../../../../../Utils/UI/Containers/glass';
import {ClipInTitle} from '../../../../../../Utils/UI/Copy/Titles';

import {FromMiddle} from '../../../../../../Utils/Animations/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Utils/Animations/interpolate';
import {BackgroundVideoandStyles} from '../Modules/ImportBackgroundVideoandStyles';

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
	const frame = useCurrentFrame();
	return (
		<>
			<Sequence>
				<VerticalDrop
					style={{
						clipPath: FromMiddle(0, 'Wobbly'),
						opacity: interpolateOpacityByFrame(
							frame,
							Duration - 15,
							Duration,
							1,
							0
						),
					}}
				>
					<ClipInTitle start={3}>{DATA.Title}</ClipInTitle>
				</VerticalDrop>
				<BackgroundVideoandStyles
					STYLES={STYLES}
					VIDEO={DATA.BackgroundVideo}
				/>
			</Sequence>
		</>
	);
};
