
// Import Modules
// Static
import {ModuleImageBackgroundNoTextSQ} from './Sequences/ImageBackground_NoText'
import {ModuleImageBackgroundSingleTextSQ} from './Sequences/ImageBackground_SingleText'
import {ModuleImageBackgroundLogoPrefixOfferSuffixDisclamerSQ} from './Sequences/ImageBackground_Logo_Prefix_Offer_Suffix_Disclamer'
import {ModuleImageBackgroundLogoFlatColorUnderlayWithLogoSQ} from './Sequences/ImageBackground_FlatColorUnderlay_SingleText_Logo';

// Dynamic



// Export Modules
// Static
export const ModuleImageBackgroundNoText = ({DATA, Duration}) => ModuleImageBackgroundNoTextSQ({DATA, Duration})
export const ModuleImageBackgroundSingleText = ({DATA, Duration}) => ModuleImageBackgroundSingleTextSQ({DATA, Duration})
export const ModuleImageBackgroundLogoPrefixOfferSuffixDisclamer = ({DATA, Duration}) => ModuleImageBackgroundLogoPrefixOfferSuffixDisclamerSQ({DATA, Duration})
export const ModuleImageBackgroundLogoFlatColorUnderlayWithLogo = (props) =>
ModuleImageBackgroundLogoFlatColorUnderlayWithLogoSQ(props);
// Dynamic