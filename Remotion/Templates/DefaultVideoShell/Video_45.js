import React from 'react';
import {useState, useEffect} from 'react';
import {AbsoluteFill, Series, Audio} from 'remotion';
import {preloadFonts} from '../../Utils/FUNC/preloadFonts';

import {
	ModuleVideoBackgroundSingleText,
	ModuleVideoBackgroundTitleSubtitle,
	ModuleVideoBackgroundNoText,
	ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamer,
	ModuleVideoBackgroundLogoStaticOfferDisclamer,
} from './Components/Modules/video/Module_VideoBackground_45';

import {
	ModuleImageBackgroundNoText,
	ModuleImageBackgroundSingleText,
	ModuleImageBackgroundLogoPrefixOfferSuffixDisclamer,
} from './Components/Modules/Image/Module_ImageBackground_45';

import {ModuleColorBackgroundNoText} from './Components/Modules/color/Module_ColorBackground_45';

const Components = {
	ModuleVideoBackgroundSingleText,
	ModuleVideoBackgroundTitleSubtitle,
	ModuleVideoBackgroundNoText,
	ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamer,
	ModuleVideoBackgroundLogoStaticOfferDisclamer,
	ModuleImageBackgroundLogoPrefixOfferSuffixDisclamer,
	ModuleImageBackgroundNoText,
	ModuleImageBackgroundSingleText,
	ModuleColorBackgroundNoText,
};

export const VideoShell45 = ({DATA, fontName = 'Heebo'}) => {
	const [fontFamilies, setFontFamilies] = useState({});

	useEffect(() => {
		const loadFonts = async () => {
			const loadedFontFamilies = await preloadFonts();
			setFontFamilies(loadedFontFamilies);
		};

		loadFonts();
	}, []);

	const fontFamily = fontFamilies[fontName] || 'sans-serif';

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
									Duration: series.DATA.Duration,
								})}
							</Series.Sequence>
						);
					})}
				</Series>
			</AbsoluteFill>
			{/* 	<AbsoluteFill>
				<Audio src="https://thirdspace-creator-assets.s3.ap-southeast-2.amazonaws.com/audiotest_e5c1837f81_a2d9c41b9f.mp3?updated_at=2023-04-26T01:57:19.255Z" />
			</AbsoluteFill> */}
		</AbsoluteFill>
	);
};
