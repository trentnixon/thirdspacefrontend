import React from 'react';
import {useState, useEffect} from 'react';
import {AbsoluteFill, Audio, Series} from 'remotion';
import {preloadFonts} from '../Utils/FUNC/preloadFonts';

import * as M from './Module_VideoBackground_916';

const Components = {
	DefaultBackgroundOnly:M.DefaultBackgroundOnly,
	WinningsLogoAndOffer:M.WinningsLogoAndOffer, 
	GlobusFlatColorUnderlayFullScreen:M.GlobusFlatColorUnderlayFullScreen,
	GlobusFlatColorUnderlayHalfScreen:M.GlobusFlatColorUnderlayHalfScreen
};

export const VideoShell916 = ({DATA, RESOLUTION}) => {

	console.log(DATA, RESOLUTION)
	const [fontFamilies, setFontFamilies] = useState({});
	const fontFamily = fontFamilies[DATA.Settings.Font.fontFamily] || 'Heebo';
	useEffect(() => {
		const loadFonts = async () => {
			const loadedFontFamilies = await preloadFonts();
			setFontFamilies(loadedFontFamilies);
		};

		loadFonts(); 
	}, []);
	return (
		<AbsoluteFill
			style={{backgroundColor: DATA.Settings.Theme.BackgroundColor, fontFamily}}
		>
			<AbsoluteFill>
				<Series>
					{DATA.Series.map((series, i) => {
						return (
							<Series.Sequence key={i} durationInFrames={series.DATA.Duration}>
								{React.createElement(Components[series.component], {
									DATA: series.DATA,
									Duration: series.DATA.Duration,
									Theme: DATA.Settings.Theme,
									RESOLUTION,
								})}
							</Series.Sequence>
						);
					})}
				</Series>
			</AbsoluteFill>

			{/* 		<AbsoluteFill>
				<Audio src="https://thirdspace-creator-assets.s3.ap-southeast-2.amazonaws.com/audiotest_e5c1837f81_a2d9c41b9f.mp3?updated_at=2023-04-26T01:57:19.255Z" />
			</AbsoluteFill> */}
		</AbsoluteFill>
	);
};
