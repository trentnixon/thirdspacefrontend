import {DefaultContainer} from '../../../../../Utils/UI/Containers/glass';
import {TitleCenteredAnimated} from '../components/copy/TitleCenteredAnimated';
import {SmallDisclaimerAtBottom} from '../components/copy/SmallDisclaimerAtBottom';
import {BrandLogoCenterAnimated} from '../components/Images/BrandLogoCenterAnimated';

export const PreBuildMainTitleCenteredLogoBottomDisclaimer = (props) => {
	const {SIZINGS, DATA, Duration, Disclaimer, STYLES, Theme} = props;
	return (
		<DefaultContainer>
			<BrandLogoCenterAnimated
				DATA={DATA}
				SIZINGS={SIZINGS}
				Duration={Duration}
				STYLES={STYLES}
			/>
			<TitleCenteredAnimated
				SIZINGS={SIZINGS}
				DATA={DATA}
				Duration={Duration}
				STYLES={STYLES}
				Theme={Theme}
			/>

			<SmallDisclaimerAtBottom SIZINGS={SIZINGS} COPY={Disclaimer} />
		</DefaultContainer>
	);
};
