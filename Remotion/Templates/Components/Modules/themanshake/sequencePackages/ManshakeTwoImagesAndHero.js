/* Import {DefaultContainer} from '../../../../../Utils/UI/Containers/glass';
 */
import {SmallDisclaimerAtBottom} from '../../../Global/components/copy/SmallDisclaimerAtBottom';
/* Import {WinningLogoCenteredFadeIn} from '../../../Global/components/Images/WinningsImages';
import {AnimateElement} from '../../../../../Utils/Animations/RemotionAnimate'; */
import {ManshakeWeightlossCopy} from '../../../Global/components/copy/ManShakeCopy';
import {ManshakeBeforeAfterTransition} from '../../../Global/components/Images/ManshakeBeforeAfterTransition';
import {AbsoluteFill} from 'remotion';

export const ManshakeTwoImagesAndHero = (props) => {
	return (
		<AbsoluteFill>
			<ManshakeBeforeAfterTransition {...props} />
			<ManshakeWeightlossCopy {...props} />
			<SmallDisclaimerAtBottom {...props} />
		</AbsoluteFill>
	);
};
