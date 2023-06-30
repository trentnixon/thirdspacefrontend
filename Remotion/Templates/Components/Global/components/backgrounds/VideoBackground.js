import {AbsoluteFill, Video} from 'remotion';
export const BackgroundVideoandStyles = ({STYLES, VIDEO}) => {
	return (
		<AbsoluteFill style={STYLES}>
			<Video volume={0} src={VIDEO} />
		</AbsoluteFill>
	);
};