import {DefaultContainer} from '../../../../../Utils/UI/Containers/glass';
import {BrandCornerLogoAnimated} from '../components/Images/BrandLogoCenterAnimated';
import {SequenceStringOverFlatColor} from '../components/copy/PrefixVariableSuffix';
import {FlatColorRevealHorizontal} from '../components/Containers/AnimatedContainers';

export const PreBuildFlatColorUnderlaySingleLeadCopyLogo = (props) => {
	return (
		<DefaultContainer>
			<SequenceStringOverFlatColor {...props} />
      <BrandCornerLogoAnimated {...props} />
			<FlatColorRevealHorizontal {...props} />
		</DefaultContainer>  
	);
};