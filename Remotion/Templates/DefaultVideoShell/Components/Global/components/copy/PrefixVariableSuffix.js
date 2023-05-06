import {AnimateElement} from '../../../../../../Utils/Animations/RemotionAnimate';
import {P} from '../../../../../../Utils/UI/Static_Copy';

/*
<PrefixVariableSuffix
					DATA={DATA}
					SIZINGS={SIZINGS}
					Duration={Duration}
				/>
*/
export const PrefixVariableSuffix = ({Duration, SIZINGS, DATA}) => {
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
					{DATA.Prefix}{' '}
					<span style={{fontWeight: 900}}>{DATA.StaticOffer}</span>{' '}
					{DATA.Suffix}
				</P>
			</AnimateElement>
		</div>
	);
};
