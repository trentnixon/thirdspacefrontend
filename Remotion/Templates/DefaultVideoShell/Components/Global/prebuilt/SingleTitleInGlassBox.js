import {ClipInTitle} from '../../../../../Utils/UI/Copy/Titles';
import {GlassBoxRevealVertial} from '../components/AnimatedContainers';

export const PrebuildSingleTitleInGlassBox = ({frame, Duration, Title, DATA}) => {
	return (
		<GlassBoxRevealVertial frame={frame} Duration={Duration}>
			<ClipInTitle start={3} DATA={DATA}>{Title}</ClipInTitle>
		</GlassBoxRevealVertial>
	);
};
