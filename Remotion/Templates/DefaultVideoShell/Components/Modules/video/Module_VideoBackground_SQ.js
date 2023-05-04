// Import Modules
// Static
import {ModuleVideoBackgroundNoTextSQ} from './Sequences/VideoBackground_NoText'
import {ModuleVideoBackgroundSingleTextSQ} from './Sequences/VideoBackground_SingleText'
import {ModuleVideoBackgroundTitleSubtitleSQ} from './Sequences/VideoBackground_Title_Subtitle'
import {ModuleVideoBackgroundLogoStaticOfferDisclamerSQ} from './Sequences/VideoBackground_Logo_StaticOffer_Disclamer'
import {ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamerSQ} from './Sequences/VideoBackground_Logo_Prefix_Offer_Suffix_Disclamer'
// Dynamic



// Export Modules
// Static

export const ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamer = ({DATA, Duration})=> ModuleVideoBackgroundLogoPrefixOfferSuffixDisclamerSQ({DATA, Duration});
export const ModuleVideoBackgroundNoText = ({DATA,Duration}) => ModuleVideoBackgroundNoTextSQ({DATA, Duration}) 
export const ModuleVideoBackgroundSingleText = ({DATA,Duration}) => ModuleVideoBackgroundSingleTextSQ({DATA,Duration})
export const ModuleVideoBackgroundTitleSubtitle = ({DATA,Duration}) => ModuleVideoBackgroundTitleSubtitleSQ({DATA, Duration}) 
export const ModuleVideoBackgroundLogoStaticOfferDisclamer = ({DATA, Duration})=> ModuleVideoBackgroundLogoStaticOfferDisclamerSQ({DATA, Duration});

// Dynamic