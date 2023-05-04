import {Audio} from 'remotion';
export const CompositionAudio = ({Track}) => {
	console.log(Track.length)
	if (Track.length === 0) return false;
	return <Audio src={Track.file} />;
};
