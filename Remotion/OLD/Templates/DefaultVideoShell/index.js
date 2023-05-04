import {
	AbsoluteFill,
	interpolate,
	Series,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/TitanOne';
const {fontFamily} = loadFont(); // "Titan One"

import {Body} from './Components/Body';
import {TAIL} from './Components/Tail';
import {Top_VideoBackground_SingleText} from './Components/Top';
import React from 'react';

export const HelloWorld = ({DATA}) => {
	const Components = {
		Top_VideoBackground_SingleText,
		TAIL,
		Body,
	};

	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white', fontFamily}}>
			<AbsoluteFill style={{opacity}}>
				<Series>
					{DATA.Series.map((series, i) => {
						return (
							<Series.Sequence durationInFrames={series.Duration} key={i}>
								{React.createElement(Components[series.component], {
									DATA: series.DATA,
								})}
							</Series.Sequence>
						);
					})}
				</Series>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
