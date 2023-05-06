import {DefaultContainer} from '../../../../../Utils/UI/Containers/glass';

import {SmallDisclaimerAtBottom} from '../components/copy/SmallDisclaimerAtBottom';
import {BrandLogoCenterAnimated} from '../components/Images/BrandLogoCenterAnimated';
import {PrefixVariableSuffix} from '../components/copy/PrefixVariableSuffix';

export const PreBuildPrefixVariableSuffixLogoDisclaimer = ({
	SIZINGS,
	DATA,
	Duration,
	Disclaimer,
}) => {
	return (
		<DefaultContainer>
			<BrandLogoCenterAnimated
				DATA={DATA}
				SIZINGS={SIZINGS}
				Duration={Duration}
			/>

			<PrefixVariableSuffix DATA={DATA} SIZINGS={SIZINGS} Duration={Duration} />

			<SmallDisclaimerAtBottom SIZINGS={SIZINGS} COPY={Disclaimer} />
		</DefaultContainer>
	);
};
