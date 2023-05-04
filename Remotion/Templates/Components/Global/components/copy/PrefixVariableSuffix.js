import {useEffect, useState, useCallback} from 'react';
import {AnimateElement} from '../../../../../Utils/Animations/RemotionAnimate';
import {P} from '../../../../../Utils/UI/Static_Copy';

/*
<PrefixVariableSuffix
					DATA={DATA}
					SIZINGS={SIZINGS}
					Duration={Duration}
				/>
*/
export const PrefixVariableSuffix = (props) => {
	const {Duration, SIZINGS, DATA, Theme} = props;
	return (
		<div
			style={{
				position: 'absolute',
				top: 'calc(50%)',
				left: '50%',
				transform: 'translateX(-50%)',
				transformOrigin: 'center center',
				width: '100%',
				zIndex: 500,
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
					color={Theme?.Primary ? Theme.Primary : 'white'}
					weight={400}
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

export const SequenceStringOverFlatColor = ({
	Duration,
	SIZINGS,
	DATA,
	Theme,
	RESOLUTION,
}) => {
	const {ContainerDirection, FontWeight} = DATA.Settings;

	const [direction, setDirection] = useState('left');
	const [fontWeight, setFontWeight] = useState(400);

	const setSeqeunceDirection = useCallback(() => {
		setDirection(ContainerDirection);
		setFontWeight(FontWeight);
	}, [ContainerDirection]);

	useEffect(() => {
		setSeqeunceDirection();
	}, [setSeqeunceDirection]);

	const FontPosition = {
		position: 'absolute',
		top: '2%',
		[direction]: '0%',
		width: `${RESOLUTION.w / 2}px`,
		zIndex: '500',
		minHeight: '-webkit-fill-available',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	return (
		<div style={FontPosition}>
			<AnimateElement
				In={15}
				Out={Duration - 30}
				ANIMATEIN="FadeInScale"
				ANIMATEINOUT="FadeOutMoveUp"
				ease="Smooth"
			>
				<P
					size={SIZINGS.TITLE}
					margin="0 0.3em"
					color={Theme?.Primary}
					textAlign="left"
					weight={fontWeight}
					letterSpacing="0px"
				>
					{DATA.Prefix} <span>{DATA.StaticOffer}</span> {DATA.Suffix}
				</P>
			</AnimateElement>
		</div>
	);
};

export const SequenceStringCentered = ({
	Duration,
	SIZINGS,
	DATA,
	Theme,
	In = 15,
	Out = 30,
}) => {
	const {ContainerDirection, FontWeight} = DATA.Settings;

	const [direction, setDirection] = useState('left');
	const [fontWeight, setFontWeight] = useState(400);

	const setSeqeunceDirection = useCallback(() => {
		setDirection(ContainerDirection);
		setFontWeight(FontWeight);
	}, [ContainerDirection]);

	useEffect(() => {
		setSeqeunceDirection();
	}, [setSeqeunceDirection]);

	const FontPosition = {
		position: 'absolute',
		top: 'calc(50%)',
		left: '50%',
		transform: 'translateX(-50%)',
		transformOrigin: 'center center',
		width: SIZINGS?.TITLEWIDTH === undefined ?  '100%':SIZINGS?.TITLEWIDTH ,
		zIndex: 500,
	};

	return (
		<div style={FontPosition}>
			<AnimateElement
				In={In}
				Out={Duration - Out}
				ANIMATEIN="FadeInScale"
				ANIMATEINOUT="FadeOutMoveUp"
				ease="Smooth"
			>
				<P
					size={SIZINGS.TITLE}
					margin="0 0.3em"
					color={Theme?.Primary}
					textAlign="center"
					weight={fontWeight}
					letterSpacing="0px"
				>
					{DATA.Prefix} <span>{DATA.StaticOffer}</span> {DATA.Suffix}
				</P>
			</AnimateElement>
		</div>
	);
};
