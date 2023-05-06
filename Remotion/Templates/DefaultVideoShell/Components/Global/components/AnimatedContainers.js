
// UTILS
import {VerticalDrop} from '../../../../../Utils/UI/Containers/glass';
import {FromBottomToTop} from '../../../../../Utils/Animations/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Utils/Animations/interpolate';

// <GlassBoxRevealVertial frame={frame} Duration={Duration}>

export const GlassBoxRevealVertial = (props) => {
	const {frame, Duration} = props;
	return (
		<VerticalDrop
			style={{
				clipPath: FromBottomToTop(0, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					Duration - 15,
					Duration,
					1,
					0
				),
			}}
		>
			{props.children}
		</VerticalDrop>
	);
};
