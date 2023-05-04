import {DefaultContainer} from '../../../../../Utils/UI/Containers/glass';
import {BrandLogoCenterAnimated} from '../components/Images/BrandLogoCenterAnimated';
import {SequenceStringCentered} from '../components/copy/PrefixVariableSuffix';
import {FlatColorRevealHorizontalFullScreen} from '../components/Containers/AnimatedContainers';

export const PrebuildFullScreenFlatcolorUnderlaySingleLeadCopyLogo = (
	props
) => {
	return (
		<DefaultContainer>
			<BrandLogoCenterAnimated {...props} In={60} Out={0} />
			<SequenceStringCentered {...props} In={90} Out={0} />
			<FlatColorRevealHorizontalFullScreen {...props} />
		</DefaultContainer>
	);
};
