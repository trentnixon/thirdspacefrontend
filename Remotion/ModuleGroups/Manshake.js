import {Composition, getInputProps} from 'remotion';
import {VideoShell916} from '../Templates/Video_916';
import {VideoShell45} from '../Templates/Video_45';
import {VideoShellSQ} from '../Templates/Video_SQ';
import OBJ from './manshake.json';
import {splitAudioAndVisual} from '../Utils/FUNC/DataFormatting';

export const ManshakeModuleGroup = () => {
	const VIDEODATA = OBJ
	// Formatt Data

	const {SequenceAudio, SequenceVisual} = splitAudioAndVisual(VIDEODATA.Series);
	return (
		<>
			<Composition
				id="ManShake-916"
				component={VideoShell916}
				durationInFrames={SequenceVisual.reduce(
					(acc, obj) => acc + obj.DATA.Duration,
					0
				)}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					DATA: {
						SequenceAudio,
						SequenceVisual,
						Settings: VIDEODATA.Settings,
					},
					RESOLUTION: {
						w: 1920,
						h: 1080,
					},
				}}
			/>
			<Composition
				id="ManShake-45"
				component={VideoShell45}
				durationInFrames={SequenceVisual.reduce(
					(acc, obj) => acc + obj.DATA.Duration,
					0
				)}
				fps={30}
				width={1080}
				height={1350}
				defaultProps={{
					DATA: {
						SequenceAudio,
						SequenceVisual,
						Settings: VIDEODATA.Settings,
					},
					RESOLUTION: {
						w: 1080,
						h: 1350,
					},
				}}
			/>
			<Composition
				id="ManShake-11"
				component={VideoShellSQ}
				durationInFrames={SequenceVisual.reduce(
					(acc, obj) => acc + obj.DATA.Duration,
					0
				)}
				fps={30}
				width={1920}
				height={1920}
				defaultProps={{
					DATA: {
						SequenceAudio,
						SequenceVisual,
						Settings: VIDEODATA.Settings,
					},
					RESOLUTION: {
						w: 1920,
						h: 1920,
					},
				}}
			/>
		</>
	);
};
