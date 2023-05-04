import {DefaultContainer} from '../../../../../Utils/UI/Containers/glass';

import {SmallDisclaimerAtBottom} from '../../../Global/components/copy/SmallDisclaimerAtBottom';
import {WinningLogoCenteredFadeIn} from '../../../Global/components/Images/WinningsImages';
import {AnimateElement} from '../../../../../Utils/Animations/RemotionAnimate';
import {WinningsCopyCenteredFadeIn} from '../../../Global/components/copy/WinningsCopy';

export const PackageLogoandOffer = (props) => {
	return (
		<DefaultContainer>
			<AnimateElement 
				In={0}
				Out={props.Duration - props.Out}
				ANIMATEIN="ScaleIn"
				ANIMATEINOUT="ScaleOut"
				ease="Wobbly"
			>
				<WinningLogoCenteredFadeIn {...props} />

				<WinningsCopyCenteredFadeIn {...props} />
			</AnimateElement>

			<SmallDisclaimerAtBottom {...props} />
		</DefaultContainer>
	);
};
