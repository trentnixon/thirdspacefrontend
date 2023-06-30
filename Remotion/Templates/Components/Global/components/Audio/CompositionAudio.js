import {Audio,interpolate} from 'remotion';
export const CompositionAudio = ({Tracks, Duration}) => {
	if (Tracks.length === 0) return false;
	return Tracks.map((track, i) => {
		return (
			<Audio
				key={i}
				src={track.DATA.BackgroundAudio}
				volume={(f) =>
					interpolate(f, [Duration-50, Duration], [1, 0], {extrapolateLeft: 'clamp'})
				}
			/>
		);
	});
};
