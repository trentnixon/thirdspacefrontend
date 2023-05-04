/* Import {useCurrentFrame, interpolate, spring} from 'remotion'; */
import React from 'react';
/* Import {FromLeftToRight} from '../../../../../Utils/Animations/ClipWipe';
import {interpolateValueByFrame} from '../../../../../Utils/Animations/interpolate'; */
import {AnimateElement} from '../../../../../Utils/Animations/RemotionAnimate';
import {P} from '../../../../../Utils/UI/Static_Copy';
import {SpringToFrom} from '../../../../../Utils/Animations/RemotionSpring';
import {Animated, Move, Rotate, Scale} from 'remotion-animated';
/*
<PrefixVariableSuffix
					DATA={DATA}
					SIZINGS={SIZINGS}
					Duration={Duration}
				/>
*/

export const ManshakeWeightlossCopy = (props) => {
	const {Duration, SIZINGS, DATA, Theme} = props;

	console.log(SIZINGS);
	const MoveItem = SpringToFrom(0, 25, 0, 'Smooth');
	return (
		<div
			style={{
				position: 'absolute',
				// Top: 'calc(50%)',
				left: `${MoveItem}%`,
				transformOrigin: 'center center',
				width: '50%',
				zIndex: 10,
				textAlign: 'center',
				height: '100%',
				flexDirection: 'column',
				placeContent: 'center',
				alignItems: 'center',
				display: 'flex',
			}}
		>
			<div style={{display: 'inline-block'}}>
				<LeadCopy
					Copy={DATA.Prefix}
					Color={Theme?.Primary ? Theme.Primary : 'white'}
					Size={SIZINGS.TITLE}
					Duration={Duration}
				/>
				<HeroStatement
					HeroCopy={DATA.StaticOffer}
					Color={Theme?.Primary ? Theme.Primary : 'white'}
					Size={SIZINGS.WEIGHTLOSS}
					Duration={Duration}
				/>
			</div>
		</div>
	);
};

const LeadCopy = ({Duration, Copy, Color, Size}) => {
	return (
		<AnimateElement
			In={0}
			Out={Duration - 60}
			ANIMATEIN="MoveInFromSide"
			ANIMATEINOUT="FadeOut"
			ease="Snappy"
			initialInX={1500}
			Inx={0}
			StyleHeight="auto"
		>
			<P
				size={Size}
				margin="0"
				color={Color}
				weight={400}
				letterSpacing="2px"
				textAlign="left"
			>
				"{Copy}
			</P>
		</AnimateElement>
	);
};

const HeroStatement = ({Duration, Size, Color, HeroCopy}) => {
	return (
		<AnimateElement
			In={0}
			Out={Duration - 60}
			ANIMATEIN="MoveInFromSide"
			ANIMATEINOUT="FadeOut"
			ease="Snappy"
			initialInX={-1500}
			Inx={60}
			StyleHeight="auto"
		>
			<P
				size={Size}
				margin="0"
				color={Color}
				letterSpacing="2px"
				weight={700}
				textAlign="right"
			>
				{HeroCopy}"
			</P>
		</AnimateElement>
	);
};

export const ManshakeWeightlossCopyInFromBottom = (props) => {
	const {Duration, SIZINGS, DATA, Theme} = props;

	console.log(SIZINGS);

	return (
		<div
			style={{
				position: 'absolute',
				bottom: 0,
				width: '100%',
				height: `auto`,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'end',
				alignItems: 'center',
				zIndex: 100,
			}}
		>
			<Animated
			style={{
				width: '60%',
			}}
				animations={[
					Move({
						initialY: 300,
						y: 0,
						start: 0,
						duration: 15,
					}),
						Move({y: 300, start: (Duration-30), duration: 30}),
				]}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						backgroundColor: 'black',
						width: '100%',
						padding:'4%'
					}}
				>
					<P
						size={SIZINGS.TITLE}
						margin="0"
						color={Theme?.Primary ? Theme.Primary : 'white'}
						weight={900}
						letterSpacing="2px"
						textAlign="left"
					>
						{DATA.Prefix}
					</P>
					<P
						size={SIZINGS.WEIGHTLOSS}
						margin="0"
						color={Theme?.Primary ? Theme.Primary : 'white'}
						weight={400}
						letterSpacing="2px"
						textAlign="left"
					>
						{DATA.StaticOffer}
					</P>
				</div>
			</Animated>
		</div>
	);
};


export const ManshakeWeightlossCopyInFromBottomAlt = (props) => {
	const {Duration, SIZINGS, DATA, Theme} = props;

	console.log(SIZINGS);

	return (
		<div
			style={{
				position: 'absolute',
				
				width: '100%',
				height: `100%`,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'start',
				zIndex: 100,
			}}
		>
			<Animated
			style={{
				width: '50%',
			}}
				animations={[
					Move({
						initialY: 1000,
						y: 0,
						start: 0,
						duration: 15,
					}),
						Move({y: 1000, start: (Duration-30), duration: 30}),
				]}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						backgroundColor: 'black',
						width: '100%',
						padding:'4%'
					}}
				>
					<P
						size={SIZINGS.TITLE}
						margin="0"
						color={Theme?.Primary ? Theme.Primary : 'white'}
						weight={900}
						letterSpacing="2px"
						textAlign="left"
					>
						{DATA.Prefix}
					</P>
					<P
						size={SIZINGS.WEIGHTLOSS}
						margin="0"
						color={Theme?.Primary ? Theme.Primary : 'white'}
						weight={400}
						letterSpacing="2px"
						textAlign="left"
					>
						{DATA.StaticOffer}
					</P>
				</div>
			</Animated>
		</div>
	);
};
