import {Animated, Move, Scale, Size, Fade} from 'remotion-animated';
import {SpringConfig} from '../Animations/RemotionSpring';

const INS = {
	none: (props) => {
		const {In, ease} = props
		return [
			Fade({to: 1, initial: 1, start: In}),
		];
	},
	FadeIn: (props) => {
		const {In, ease} = props
		return [
			Fade({to: 1, initial: 0, start: In}),
		];
	},
	ScaleIn: (props) => {
		const {In, ease} = props
		return [
			Scale({by: 1, initial: 0.1, ...SpringConfig[ease]}),
		];
	},
	FadeInScale: (props) => {
		const {In, ease} = props
		return [
			Scale({by: 1, initial: 0.1, ...SpringConfig[ease]}),
			Fade({to: 1, initial: 0, start: In}),
		];
	},
	FadeInMoveUp: (props) => {
		const {In, ease} = props
		return [
			Fade({to: 1, initial: 0, start: In, ...SpringConfig[ease]}),
			Move({initialY: 50, y: 0, start: In, ...SpringConfig[ease]}),
		];
	},
	FadeInMoveDown: (props) => {
		const {In, ease} = props
		return [
			Fade({to: 1, initial: 0, start: In, ...SpringConfig[ease]}),
			Move({initialY: -50, y: 0, start: In, ...SpringConfig[ease]}),
		];
	},
	MoveInFromSide: (props) => {
		const {In,initialInX,Inx, ease} = props
		return [
			Move({initialX:initialInX, x:Inx, start: In, ...SpringConfig[ease]}),
		];
	},
};

const OUTS = {
	FadeOut: (props) => {
		const {Out, ease} = props
		return [
			Fade({to: 0, start: Out}),
		];
	},
	ScaleOut: (props) => {
		const {Out, ease} = props
		return [
			Scale({by: 0, start: Out, ...SpringConfig[ease]}),
		];
	},
	FadeOutScale: (props) => {
		const {Out, ease} = props
		return [
			Fade({to: 0, start: Out}),
			Scale({by: 0, start: Out, ...SpringConfig[ease]}),
		];
	},
	FadeOutMoveDown: (props) => {
		const {Out, ease} = props
		return [
			Fade({to: 0, initial: 1, start: Out, ...SpringConfig[ease]}),
			Move({initialY: 0, y: 50, start: Out, ...SpringConfig[ease]}),
		];
	},
	FadeOutMoveUp: (props) => {
		const {Out, ease} = props
		return [
			Fade({to: 0, initial: 1, start: Out, ...SpringConfig[ease]}),
			Move({initialY: 0, y: -50, start: Out, ...SpringConfig[ease]}),
		];
	},
	MoveOutFromSide: (props) => {
		const {Out,initialOutX,Outx, ease} = props
	
		return [
			Move({initialX:initialOutX, x:Outx, start: Out, ...SpringConfig[ease]}),
		];
	},
};

export const AnimateElement = (props) => {
/* 	Const {
		In,
		Out,
		ease = 'Wobbly',
		ANIMATEIN = 'FadeInScale',
		ANIMATEINOUT = 'FadeOutScale',
		initialX=0,
		initialY=0,
		x=0,
		y=0
	} = props; */
	return (
		<Animated
			style={{
				width: '100%',
				height: '100%',
			}}
			in={props.In}
			animations={[
				...INS[props.ANIMATEIN](props),
				...OUTS[props.ANIMATEINOUT](props),
			]}
		>
			{props.children}
		</Animated>
	);
};
