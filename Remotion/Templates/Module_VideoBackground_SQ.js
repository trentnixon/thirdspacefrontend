// Import Modules

// Default
import {DefaultBackgroundOnlySQ} from './Components/Modules/default/defaultBackgroundOnly';
import { DefaultColorBackgroundWithLogoAnimationSQ } from './Components/Modules/default/defaultColorBackgroundWithLogoAnimation';

// Custom Client Builds
// Winnings
import {WinningsLogoAndOfferSQ} from './Components/Modules/winnings/VideoBackground_Logo_Prefix_Offer_Suffix_Disclamer';
import {WinningsLogoAndOfferIMGSQ} from './Components/Modules/winnings/ImageBackground_Logo_Prefix_Offer_Suffix_Disclamer';
import {WinningsOutroSQ} from './Components/Modules/winnings/VideoBackground_OutroSection';



// Globus
import {GlobusFlatColorUnderlayFullScreenSQ} from './Components/Modules/globus/GlobusFlatColorUnderlayFullScreen';
import {GlobusFlatColorUnderlayHalfScreenSQ} from './Components/Modules/globus/GlobusFlatColorUnderlayHalfScreen'

// Manshake
import {ManshakeTwoImagesAndHeroSQ} from './Components/Modules/themanshake/ManshakeTwoImagesAndHero'
import {ManshakeTwoCardSwapSQ} from './Components/Modules/themanshake/ManshakeTwoCardSwap'




// Export Modules
export const DefaultBackgroundOnly = (props) => DefaultBackgroundOnlySQ(props);
export const DefaultColorBackgroundWithLogoAnimation = (props) =>
DefaultColorBackgroundWithLogoAnimationSQ(props);
// Custom Brand Modules
// WINNINGS
export const WinningsLogoAndOffer = (props) =>
WinningsLogoAndOfferSQ(props);
export const WinningsLogoAndOfferIMG = (props) =>
WinningsLogoAndOfferIMGSQ(props);
export const WinningsOutro = (props) =>
WinningsOutroSQ(props);

// Globus
export const GlobusFlatColorUnderlayFullScreen = (props) =>
GlobusFlatColorUnderlayFullScreenSQ(props);
export const GlobusFlatColorUnderlayHalfScreen = (props) =>
GlobusFlatColorUnderlayHalfScreenSQ(props);

// The Man Shake
export const ManshakeTwoImagesAndHero = (props) =>
ManshakeTwoImagesAndHeroSQ(props);
export const ManshakeTwoCardSwap = (props) =>
ManshakeTwoCardSwapSQ(props);