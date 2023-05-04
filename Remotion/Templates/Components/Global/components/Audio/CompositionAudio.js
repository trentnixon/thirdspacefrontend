import {Audio} from 'remotion';
export const CompositionAudio = ({Tracks}) => {

	if (Tracks.length === 0) return false;
	return Tracks.map((track, i) => {
		return <Audio key={i} src={track.DATA.BackgroundAudio} />;
	});
};
