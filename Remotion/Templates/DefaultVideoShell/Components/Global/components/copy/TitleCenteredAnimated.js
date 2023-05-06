import {AnimateElement} from '../../../../../../Utils/Animations/RemotionAnimate';
import {P} from '../../../../../../Utils/UI/Static_Copy';
/*
<TitleCenteredAnimated
				SIZINGS={SIZINGS}
				DATA={DATA}
				Duration={Duration}
			/>
*/
export const TitleCenteredAnimated = ({SIZINGS, DATA, Duration}) => {
	return (
		<div
			style={{
				position: 'absolute',
				top: 'calc(50%)',
				left: '50%',
				transform: 'translateX(-50%)',
				transformOrigin: 'center center',
				width: '100%',
			}}
		>
			<AnimateElement
				In={15}
				Out={Duration - 15}
				ANIMATEIN="FadeInScale"
				ANIMATEINOUT="FadeOutMoveDown"
			>
				<P
					size={SIZINGS.TITLE}
					margin=".3em 0 0 0"
					color="#fff"
					weight={100}
					letterSpacing="2px"
				>
					<span style={{fontWeight: 900}}>{DATA.Title}</span>
				</P>
			</AnimateElement>
		</div>
	);
};
