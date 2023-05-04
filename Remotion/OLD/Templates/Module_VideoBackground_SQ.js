// Import Modules

// Default
import {DefaultBackgroundOnlySQ} from './Components/Modules/default/defaultBackgroundOnly';

// Custom Client Builds
// Default
import {WinningsLogoAndOfferSQ} from './Components/Modules/winnings/VideoBackground_Logo_Prefix_Offer_Suffix_Disclamer';

// Globus
import {GlobusFlatColorUnderlayFullScreenSQ} from './Components/Modules/globus/GlobusFlatColorUnderlayFullScreen';
import {GlobusFlatColorUnderlayHalfScreenSQ} from './Components/Modules/globus/GlobusFlatColorUnderlayHalfScreen'

// ManShake



// Export Modules
export const DefaultBackgroundOnly = (props) => DefaultBackgroundOnlySQ(props);

// Custom Brand Modules
// WINNINGS
export const WinningsLogoAndOffer = (props) =>
WinningsLogoAndOfferSQ(props);

// Globus
export const GlobusFlatColorUnderlayFullScreen = (props) =>
GlobusFlatColorUnderlayFullScreenSQ(props);
export const GlobusFlatColorUnderlayHalfScreen = (props) =>
GlobusFlatColorUnderlayHalfScreenSQ(props);