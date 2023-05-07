import {Animated, Move, Scale,Size, Fade} from 'remotion-animated';
import {SpringConfig} from '../Animations/RemotionSpring';
 
const INS = {
	FadeInScale: (In, ease) => {
		return [
			Scale({by: 1, initial: 0.1, ...SpringConfig[ease]}),
			Fade({to: 1, initial: 0, start: In}),
		];
	},
	FadeInMoveUp: (In, ease) => {
		return [
			Fade({to: 1, initial: 0, start: In, ...SpringConfig[ease]}),
			Move({initialY: 50, y: 0, start: In, ...SpringConfig[ease]}),
		];
	},
  FadeInMoveDown: (In, ease) => {
		return [
			Fade({to: 1, initial: 0, start: In, ...SpringConfig[ease]}),
			Move({initialY: -50, y: 0, start: In, ...SpringConfig[ease]}),
		];
	},
 
};

const OUTS = {
	FadeOutScale: (Out, ease) => {
		return [
			Fade({to: 0, start: Out}),
			Scale({by: 0, start: Out, ...SpringConfig[ease]}),
		];
	},
	FadeOutMoveDown: (Out, ease) => {
		return [
			Fade({to: 0, initial: 1, start: Out, ...SpringConfig[ease]}),
			Move({initialY: 0, y: 50, start: Out, ...SpringConfig[ease]}),
		];
	},
  FadeOutMoveUp: (Out, ease) => {
		return [
			Fade({to: 0, initial: 1, start: Out, ...SpringConfig[ease]}),
			Move({initialY: 0, y: -50, start: Out, ...SpringConfig[ease]}),
		];
	},
};

export const AnimateElement = (props) => {
	const {In, Out, ease = 'Wobbly', ANIMATEIN='FadeInScale', ANIMATEINOUT='FadeOutScale'} = props;
	return (
		<Animated
			in={In}
			animations={[
				...INS[ANIMATEIN](In, ease),
				...OUTS[ANIMATEINOUT](Out, ease),
			]}
		>
			{props.children}
		</Animated>
	);
};
