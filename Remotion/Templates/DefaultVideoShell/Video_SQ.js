import {AbsoluteFill, Series,Audio} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Heebo';
const {fontFamily} = loadFont(); // "Titan One"

import {
	ModuleVideoBackgroundSingleText,
	ModuleVideoBackgroundTitleSubtitle,
	ModuleVideoBackgroundNoText,
	ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamer,
	ModuleVideoBackgroundLogoStaticOfferDisclamer
} from './Components/Modules/video/Module_VideoBackground_SQ';

import {
	ModuleImageBackgroundNoText,
	ModuleImageBackgroundSingleText
} from './Components/Modules/Image/Module_ImageBackground_SQ';

import {
	ModuleColorBackgroundNoText,

} from './Components/Modules/color/Module_ColorBackground_SQ';

import React from 'react';


export const VideoShellSQ = ({DATA}) => {
	const Components = {
		ModuleVideoBackgroundSingleText,
		ModuleVideoBackgroundTitleSubtitle,
		ModuleVideoBackgroundNoText,
		ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamer,
		ModuleVideoBackgroundLogoStaticOfferDisclamer,
		ModuleImageBackgroundNoText,
		ModuleImageBackgroundSingleText,
		ModuleColorBackgroundNoText
	};

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white', fontFamily}}>
			<AbsoluteFill>
				<Series>
					{DATA.Series.map((series, i) => {
						return (
							<Series.Sequence key={i} durationInFrames={series.DATA.Duration}>
								{React.createElement(Components[series.component], {
									DATA: series.DATA,
									Duration:series.DATA.Duration
								})}
							</Series.Sequence>
						);
					})}
				</Series>
			</AbsoluteFill>
			<AbsoluteFill>
				<Audio src="https://thirdspace-creator-assets.s3.ap-southeast-2.amazonaws.com/audiotest_e5c1837f81_a2d9c41b9f.mp3?updated_at=2023-04-26T01:57:19.255Z" />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};