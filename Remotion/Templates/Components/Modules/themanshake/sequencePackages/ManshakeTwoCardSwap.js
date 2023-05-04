/* Import {DefaultContainer} from '../../../../../Utils/UI/Containers/glass';
 */
import {SmallDisclaimerAtBottom} from '../../../Global/components/copy/SmallDisclaimerAtBottom';
/* Import {WinningLogoCenteredFadeIn} from '../../../Global/components/Images/WinningsImages';
import {AnimateElement} from '../../../../../Utils/Animations/RemotionAnimate'; */
import {
	ManshakeBeforeAfterCardSwap,
	ManshakeBeforeAfterCardSwapAlt,
} from '../../../Global/components/Images/ManshakeBeforeAfterCardSwap';

import {
	ManshakeWeightlossCopyInFromBottom,
	ManshakeWeightlossCopyInFromBottomAlt,
} from '../../../Global/components/copy/ManShakeCopy';
// Import {ManshakeBeforeAfterTransition} from '../../../Global/components/Images/ManshakeBeforeAfterTransition';
import {AbsoluteFill} from 'remotion';

export const ManshakeTwoCardSwap = (props) => {
	return (
		<AbsoluteFill>
			<ManshakeWeightlossCopyInFromBottom {...props} />
			<ManshakeBeforeAfterCardSwap {...props} />

			{/* <SmallDisclaimerAtBottom {...props} /> */}
		</AbsoluteFill>
	);
};

export const ManshakeTwoCardSwapAlt = (props) => {
	return (
		<AbsoluteFill>
			<ManshakeWeightlossCopyInFromBottomAlt {...props} />
			<ManshakeBeforeAfterCardSwapAlt {...props} />

			{/* <SmallDisclaimerAtBottom {...props} /> */}
		</AbsoluteFill>
	);
};
