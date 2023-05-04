import styled from 'styled-components';
import {FromMiddle} from '../../Animations/ClipWipe';
import {Animated, Move, Scale, Fade} from 'remotion-animated';
import {SpringConfig} from '../../Animations/RemotionSpring';

const StaticH1 = styled.h1`
	font-style: normal;
	font-weight: 900;
	font-size: 4em;
	line-height: 1em;
	text-align: center;
	text-transform: uppercase;
	margin: 0 5%;
	color: #000000;
`;

export const StaticTitle = (props) => {
	return <StaticH1>{props.children}</StaticH1>;
};

export const ClipInTitle = (props) => {
	const {start = 0, ease = 'Wobbly', Theme} = props;
	return (
		<StaticH1
			style={{
				color: Theme?.Primary ? Theme.Primary : 'white',
				clipPath: FromMiddle(start, ease),
			}}
		>
			{props.children}
		</StaticH1>
	);
};

const StaticTagline = styled.h1`
	font-style: normal;
	font-weight: 400;
	font-size: 2.8em;
	line-height: 1em;
	text-align: center;
	text-transform: uppercase;
	margin: 0 10%;
	color: #000000;
`;
export const ClipInTagline = (props) => {
	const {start = 0, ease = 'Wobbly', Theme} = props;
	return (
		<StaticTagline
			style={{
				color: Theme?.Primary ? Theme.Primary : 'white',
				clipPath: FromMiddle(start, ease),
			}}
		>
			{props.children}
		</StaticTagline>
	);
};

// REMOTION ANIMATE TITLES

export const TitleFadeandScale = (props) => {
	const {In, Out, ease = 'Wobbly'} = props;
	return (
		<Animated
			in={In}
			animations={[
				Scale({by: 1, initial: 0.1, ...SpringConfig[ease]}),
				Fade({to: 1, initial: 0, start: In}),
				Fade({to: 0, start: Out}),
				Scale({by: 0, start: Out, ...SpringConfig[ease]}),
			]}
		>
			{props.children}
		</Animated>
	);
};
