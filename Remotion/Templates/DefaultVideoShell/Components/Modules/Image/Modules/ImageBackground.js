import {AbsoluteFill, useCurrentFrame, Img, interpolate} from 'remotion';

export const ImageBackground = (props) => {
	const {STYLES, MEDIA, Duration=180} = props;
	const frame = useCurrentFrame();

	console.log("ImageBackgroundframe", frame, Duration)
	const SCALEBY = { 
		IN: interpolate(frame, [0, Duration], [1, 1.1], {
			extrapolateRight: 'clamp',
		}),
		OUT: interpolate(frame, [0, Duration], [1.1, 1], {
			extrapolateRight: 'clamp',
		}),
		NONE: interpolate(frame, [0, Duration], [1, 1], {
			extrapolateRight: 'clamp',
		}),
	};
	return (
		<AbsoluteFill style={STYLES}>
			<Img
				src={`${MEDIA.URL}`}
				width="2000px"
				style={{
					transform: `scale(${
						SCALEBY[
							MEDIA?.Settings?.scale === undefined
								? 'NONE'
								: MEDIA.Settings.scale
						]
					})`,
				}}
			/>
		</AbsoluteFill>
	);
};
