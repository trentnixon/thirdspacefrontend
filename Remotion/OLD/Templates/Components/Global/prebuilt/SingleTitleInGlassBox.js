import {ClipInTitle} from '../../../../Utils/UI/Copy/Titles';
import {GlassBoxRevealVertial} from '../components/Containers/AnimatedContainers';

export const PrebuildSingleTitleInGlassBox = (props) => {
	const {frame, Duration, Title, DATA, Theme} = props
	return (
		<GlassBoxRevealVertial frame={frame} Duration={Duration}>
			<ClipInTitle start={3} DATA={DATA} Theme={Theme}>{Title}</ClipInTitle>
		</GlassBoxRevealVertial>
	);
};
