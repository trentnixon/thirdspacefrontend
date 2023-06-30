import {Composition} from 'remotion';
import {VideoShell916} from '../Templates/Video_916';
import {VideoShell45} from '../Templates/Video_45';
import {VideoShellSQ} from '../Templates/Video_SQ';
// Import OBJ from './production.json';
// import {splitAudioAndVisual} from '../Utils/FUNC/DataFormatting';

export const ProductionCompositions = ({DATA, DefaultFPS}) => {
	if (DATA === undefined) return;

	/* 	Const {SequenceAudio, SequenceVisual} = splitAudioAndVisual(DATA.Series);

	console.log('PRODUCTION :: SequenceVisual');
	console.log(SequenceVisual); */
	return (
		<>
			<Composition
				id="VideoShell916"
				component={VideoShell916}
				durationInFrames={DATA.SequenceVisual.reduce(
					(acc, obj) => acc + obj.DATA.Duration,
					0
				)}
				fps={DefaultFPS}
				width={1920}
				height={1080}
				defaultProps={{
					DATA,
					RESOLUTION: {
						w: 1920,
						h: 1080,
					},
				}}
			/>
			<Composition
				id="VideoShell45"
				component={VideoShell45}
				durationInFrames={DATA.SequenceVisual.reduce(
					(acc, obj) => acc + obj.DATA.Duration,
					0
				)}
				fps={DefaultFPS}
				width={1080}
				height={1350}
				defaultProps={{
					DATA,
					RESOLUTION: {
						w: 1080,
						h: 1350,
					},
				}}
			/>
			<Composition
				id="VideoShellSQ"
				component={VideoShellSQ}
				durationInFrames={DATA.SequenceVisual.reduce(
					(acc, obj) => acc + obj.DATA.Duration,
					0
				)}
				fps={DefaultFPS}
				width={1920}
				height={1920}
				defaultProps={{
					DATA,
					RESOLUTION: {
						w: 1920,
						h: 1920,
					},
				}}
			/>
		</>
	);
};
