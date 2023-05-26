import React from 'react';
import {useState, useEffect} from 'react';
import {AbsoluteFill, Audio, Series} from 'remotion';
import {preloadFonts} from '../../Utils/FUNC/preloadFonts';
import {
	ModuleVideoBackgroundNoText,
	ModuleVideoBackgroundSingleText,
	ModuleVideoBackgroundTitleSubtitle,
	ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamer,
	ModuleVideoBackgroundLogoStaticOfferDisclamer,
	ModuleVideoBackgroundFlatColorUnderlayWithLogo,
	ModuleVideoBackgroundFlatColorUnderlayFullScreenLeadCopyLogo
} from './Components/Modules/video/Module_VideoBackground_916';

import {
	ModuleImageBackgroundNoText,
	ModuleImageBackgroundSingleText,
	ModuleImageBackgroundLogoPrefixOfferSuffixDisclamer,
	ModuleImageBackgroundLogoFlatColorUnderlayWithLogo 
} from './Components/Modules/Image/Module_ImageBackground_916';

import {ModuleColorBackgroundNoText} from './Components/Modules/color/Module_ColorBackground_916';

const Components = {
	ModuleVideoBackgroundNoText, 
	ModuleVideoBackgroundSingleText,
	ModuleVideoBackgroundTitleSubtitle,
	ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamer,
	ModuleVideoBackgroundLogoStaticOfferDisclamer,
	ModuleVideoBackgroundFlatColorUnderlayWithLogo,
	ModuleVideoBackgroundFlatColorUnderlayFullScreenLeadCopyLogo, 
	ModuleImageBackgroundLogoPrefixOfferSuffixDisclamer,
	ModuleImageBackgroundLogoFlatColorUnderlayWithLogo,
	ModuleImageBackgroundNoText,
	ModuleImageBackgroundSingleText,
	ModuleColorBackgroundNoText,
}; 

export const VideoShell916 = ({DATA, RESOLUTION}) => {
	// Console.log(DATA);
	const [fontFamilies, setFontFamilies] = useState({});
	const fontFamily = fontFamilies[DATA.Settings.Font.fontFamily] || 'Heebo';
	useEffect(() => {
		const loadFonts = async () => {
			const loadedFontFamilies = await preloadFonts();
			setFontFamilies(loadedFontFamilies);
		};

		loadFonts();
	}, []);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
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
									Theme:DATA.Settings.Theme,
									RESOLUTION
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
