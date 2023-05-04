import {Img, useCurrentFrame} from 'remotion';
import {Animated, Move, Rotate, Scale} from 'remotion-animated';
import {interpolateValueByFrame} from '../../../../../Utils/Animations/interpolate';

export const ManshakeBeforeAfterCardSwap = (props) => {
	const {SIZINGS, DATA, Duration} = props;
	const frame = useCurrentFrame();

	const Animate = {
		Rotate: {
			to: 7,
			from: 0,
		},
		Position: {
			to: 280,
			from: 0,
		},
		ScaleImg: {
			to: 0.5,
			Int: 2,
		},
		Timings: {
			Phase1: 30,
			Phase2: 30,
			Phase3: 30,
		},
	};

	return (
		<div
			style={{
				width: `${SIZINGS.RATIO.WIDTH}px`,
				height: `${SIZINGS.RATIO.HEIGHT}px`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<Animated
				absolute
				style={{
					position: 'absolute',
					zIndex: interpolateValueByFrame(frame, 45, 60, 1, 0),
				}}
				animations={[
					Move({
						initialX: -SIZINGS.RATIO.WIDTH,
						x: 0,
						start: 0,
						duration: 15,
					}),
					Move({
						x: -Animate.Position.to,
						start: Animate.Timings.Phase1,
						duration: 30,
					}),
					Move({
						x: -SIZINGS.RATIO.WIDTH,
						start: Duration - 30,
						duration: 30,
					}),
					Move({x: Animate.Position.to, start: 60, duration: 30}),
					Rotate({
						initial: Animate.Rotate.from,
						degrees: -Animate.Rotate.to,
						start: 60,
						duration: 15,
					}),

					Scale({
						by: Animate.ScaleImg.to,
						start: Animate.Timings.Phase1,
						duration: 15,
					}),
					Scale({by: Animate.ScaleImg.Int, start: 60, duration: 15}),
				]}
			>
				<Img
					src={DATA.IMGBefore}
					style={{
						// Width: `${SIZINGS.RATIO.WIDTH / 1.3}px`,
						height: `${SIZINGS.RATIO.HEIGHT / 1.3}px`,
					}}
				/>
			</Animated>

			<Animated
				absolute
				style={{
					position: 'absolute',
					zIndex: 1,
				}}
				animations={[
					Move({
						initialX: SIZINGS.RATIO.WIDTH,
						x: 0,
						start: 0,
						duration: 15,
					}),
					Move({
						x: Animate.Position.to,
						start: Animate.Timings.Phase1,
						duration: 30,
					}),
					Move({
						x: SIZINGS.RATIO.WIDTH,
						start: Duration - 30,
						duration: 30,
					}),
					Move({x: -Animate.Position.to, start: 60, duration: 30}),
					Rotate({
						initial: -Animate.Rotate.to,
						start: Animate.Rotate.from,
						duration: 1,
					}),
					Rotate({degrees: Animate.Rotate.to, start: 35, duration: 15}),
					Scale({
						by: Animate.ScaleImg.to,
						start: Animate.Timings.Phase1,
						duration: 15,
					}),
					Scale({by: Animate.ScaleImg.Int, start: 60, duration: 15}),
				]}
			>
				<Img
					src={DATA.IMGAfter}
					style={{
						// Width: `${SIZINGS.RATIO.WIDTH / 1.3}px`,
						height: `${SIZINGS.RATIO.HEIGHT / 1.3}px`,
					}}
				/>
			</Animated>
		</div>
	);
};

export const ManshakeBeforeAfterCardSwapAlt = (props) => {
	const {SIZINGS, DATA, Duration} = props;
	const frame = useCurrentFrame();

	const Animate = {
		Rotate: {
			to: 7,
			from: 0,
		},
		Position: {
			to: 280,
			from: 0,
		},
		ScaleImg: {
			to: 0.5,
			Int: 2,
		},
		Timings: {
			Phase1: 30,
			Phase2: 30,
			Phase3: 30,
		},
	};

	return (
		<div
			style={{
				width: `${SIZINGS.RATIO.WIDTH}px`,
				height: `${SIZINGS.RATIO.HEIGHT}px`,
				display: 'flex',
				justifyContent: 'end',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<div
				style={{
					width: `${(SIZINGS.RATIO.WIDTH/2)}px`,
				height: `${SIZINGS.RATIO.HEIGHT}px`,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
				}}
			>
				<Animated
					absolute
					style={{
						position: 'absolute',
						zIndex: interpolateValueByFrame(frame, 45, 60, 1, 0),
					}}
					animations={[
						Move({
							initialX: -SIZINGS.RATIO.WIDTH,
							x: 0,
							start: 0,
							duration: 15,
						}),
						Move({
							x: -Animate.Position.to,
							start: Animate.Timings.Phase1,
							duration: 30,
						}),
						Move({
							x: -SIZINGS.RATIO.WIDTH,
							start: Duration - 30,
							duration: 30,
						}),
						Move({x: Animate.Position.to, start: 60, duration: 30}),
						Rotate({
							initial: Animate.Rotate.from,
							degrees: -Animate.Rotate.to,
							start: 60,
							duration: 15,
						}),

						Scale({
							by: Animate.ScaleImg.to,
							start: Animate.Timings.Phase1,
							duration: 15,
						}),
						Scale({by: Animate.ScaleImg.Int, start: 60, duration: 15}),
					]}
				>
					<Img
						src={DATA.IMGBefore}
						style={{
							// Width: `${SIZINGS.RATIO.WIDTH / 1.3}px`,
							height: `${SIZINGS.RATIO.HEIGHT / 1.3}px`,
						}}
					/>
				</Animated>

				<Animated
					absolute
					style={{
						position: 'absolute',
						zIndex: 1,
					}}
					animations={[
						Move({
							initialX: SIZINGS.RATIO.WIDTH,
							x: 0,
							start: 0,
							duration: 15,
						}),
						Move({
							x: Animate.Position.to,
							start: Animate.Timings.Phase1,
							duration: 30,
						}),
						Move({
							x: SIZINGS.RATIO.WIDTH,
							start: Duration - 30,
							duration: 30,
						}),
						Move({x: -Animate.Position.to, start: 60, duration: 30}),
						Rotate({
							initial: -Animate.Rotate.to,
							start: Animate.Rotate.from,
							duration: 1,
						}),
						Rotate({degrees: Animate.Rotate.to, start: 35, duration: 15}),
						Scale({
							by: Animate.ScaleImg.to,
							start: Animate.Timings.Phase1,
							duration: 15,
						}),
						Scale({by: Animate.ScaleImg.Int, start: 60, duration: 15}),
					]}
				>
					<Img
						src={DATA.IMGAfter}
						style={{
							// Width: `${SIZINGS.RATIO.WIDTH / 1.3}px`,
							height: `${SIZINGS.RATIO.HEIGHT / 1.3}px`,
						}}
					/>
				</Animated>
			</div>
		</div>
	);
};
