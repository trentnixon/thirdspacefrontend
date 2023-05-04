import {DefaultContainer} from '../../../../Utils/UI/Containers/glass';

import {SmallDisclaimerAtBottom} from '../components/copy/SmallDisclaimerAtBottom';
import {BrandLogoCenterAnimated} from '../components/Images/BrandLogoCenterAnimated';
import {PrefixVariableSuffix} from '../components/copy/PrefixVariableSuffix';

export const PreBuildPrefixVariableSuffixLogoDisclaimer = (props) => {
	return (
		<DefaultContainer>
			<BrandLogoCenterAnimated {...props} />

			<PrefixVariableSuffix {...props} />

			<SmallDisclaimerAtBottom {...props} />
		</DefaultContainer>
	);
};
