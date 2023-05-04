import {Img} from 'remotion';

import {Animated, Move, Fade, Scale} from 'remotion-animated';
import {SpringConfig} from '../../../../../Utils/Animations/RemotionSpring';

export const BrandLogoAnimateInOut = ({DATA, In = 0, Out = 15}) => {
	const {Duration} = DATA;
	console.log(Duration);

	return DATA?.BrandLogo === undefined ? (
		false
	) : (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
			}}
		>
			<Animated
				absolute
				animations={[
					Move({
						initialY: 1000,
						y: 0,
						start: In,
						duration: 15,
						...SpringConfig.Wobbly,
					}),
					Fade({to: 0, initial: 1, start: Duration - Out}),
					Scale({
						by: 30,
						start: Duration - Out,
						duration: 15,
						...SpringConfig.Wobbly,
					}),
				]}
			>
				<Img src={`${DATA.BrandLogo.URL}`} />
			</Animated>
		</div>
	);
};
