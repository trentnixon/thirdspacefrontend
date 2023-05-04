import React from 'react';
import {useState, useEffect} from 'react';
import {AbsoluteFill, Series} from 'remotion';
import {preloadFonts} from '../Utils/FUNC/preloadFonts';
import {CompositionAudio} from './Components/Global/components/Audio/CompositionAudio';
import * as M from './Module_VideoBackground_45';

const Components = {
	DefaultBackgroundOnly: M.DefaultBackgroundOnly,
	DefaultColorBackgroundWithLogoAnimation:M.DefaultColorBackgroundWithLogoAnimation,
	WinningsLogoAndOffer: M.WinningsLogoAndOffer,
	WinningsLogoAndOfferIMG:M.WinningsLogoAndOfferIMG,
	GlobusFlatColorUnderlayFullScreen: M.GlobusFlatColorUnderlayFullScreen,
	GlobusFlatColorUnderlayHalfScreen: M.GlobusFlatColorUnderlayHalfScreen,
	ManshakeTwoImagesAndHero: M.ManshakeTwoImagesAndHero,
	ManshakeTwoCardSwap:M.ManshakeTwoCardSwap
};

export const VideoShell45 = ({DATA, RESOLUTION}) => {
	const {SequenceAudio, SequenceVisual, Settings} = DATA;
	const [fontFamilies, setFontFamilies] = useState({});
	const fontFamily = fontFamilies[Settings.Font.fontFamily] || 'Heebo';

	useEffect(() => {
		const loadFonts = async () => {
			const loadedFontFamilies = await preloadFonts();
			setFontFamilies(loadedFontFamilies);
		};

		loadFonts();
	}, []);

	return (
		<AbsoluteFill
			style={{backgroundColor: Settings.Theme.BackgroundColor, fontFamily}}
		>
			<AbsoluteFill>
				<Series>
					{SequenceVisual.map((series, i) => {
						return (
							<Series.Sequence key={i} durationInFrames={series.DATA.Duration}>
								{React.createElement(Components[series.component], {
									DATA: series.DATA,
									Duration: series.DATA.Duration,
									Theme: Settings.Theme,
									RESOLUTION,
								})}
							</Series.Sequence>
						);
					})}
				</Series>
			</AbsoluteFill>
			<CompositionAudio Tracks={SequenceAudio} />
		</AbsoluteFill>
	);
};
