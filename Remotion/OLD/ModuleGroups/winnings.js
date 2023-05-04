import {Composition, getInputProps} from 'remotion';
import {VideoShell916} from '../Templates/Video_916';
import {VideoShell45} from '../Templates/Video_45';
import {VideoShellSQ} from '../Templates/Video_SQ';
import OBJ from './winnings.json';

export const WinningsModuleGroup = () => {
	const {DATA} = getInputProps();

	const VIDEODATA = DATA === undefined ? OBJ : DATA;
	// Console.log(VIDEODATA);
	return (
		<>
			<Composition 
				id="Winnings-916"
				component={VideoShell916}
				durationInFrames={VIDEODATA.Series.reduce(
					(acc, obj) => acc + obj.DATA.Duration,
					0
				)}
				fps={30}
				width={1920} 
				height={1080}
				defaultProps={{
					DATA: VIDEODATA,
					RESOLUTION:{
						w:1920,
						h:1080
					}
				}}
			/>
			<Composition
				id="Winnings-45"
				component={VideoShell45}
				durationInFrames={VIDEODATA.Series.reduce(
					(acc, obj) => acc + obj.DATA.Duration,
					0
				)}
				fps={30}
				width={1080}
				height={1350}
				defaultProps={{
					DATA: VIDEODATA,
					RESOLUTION:{
						w:1080,
						h:1350
					}
				}}
			/>
			<Composition
				id="Winnings-11"
				component={VideoShellSQ}
				durationInFrames={VIDEODATA.Series.reduce(
					(acc, obj) => acc + obj.DATA.Duration,
					0
				)}
				fps={30}
				width={1920}
				height={1920}
				defaultProps={{
					DATA: VIDEODATA,
					RESOLUTION:{
						w:1920,
						h:1920
					}
				}}
			/>
		</>
	);
};
