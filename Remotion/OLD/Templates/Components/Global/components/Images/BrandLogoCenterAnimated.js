import {useEffect, useState} from 'react';
import {Img} from 'remotion';
import {AnimateElement} from '../../../../../Utils/Animations/RemotionAnimate';
import {useImageOrientation} from '../../../../../Utils/FUNC/imageFunctions';

/*
<BrandLogoCenterAnimated
				DATA={DATA}
				SIZINGS={SIZINGS}
				Duration={Duration}
			/>
*/
export const BrandLogoCenterAnimated = ({
	DATA,
	SIZINGS,
	Duration,
	In = 15,
	Out = 15,
}) => {
	const orientation = useImageOrientation(DATA?.BrandLogo?.URL);

	const style = {
		position: 'absolute',
		top: `calc(50% - ${SIZINGS.LOGO.height * 1.5}px )`,
		left: '50%',
		transform: 'translateX(-50%)',
		transformOrigin: 'center center',
		zIndex: 500,

	};

	const imgStyle =
		orientation === 'portrait' ? {width: '100px'} : {height: '100px'};

	return DATA?.BrandLogo === undefined ? (
		false
	) : (
		<div style={style}>
			<AnimateElement
				In={In}
				Out={Duration - Out}
				ANIMATEIN="FadeInScale"
				ANIMATEINOUT="FadeOutScale"
				ease = 'Wobbly'
			>
				<Img src={`${DATA.BrandLogo.URL}`} style={imgStyle} />
			</AnimateElement>
		</div>
	);
};

export const BrandCornerLogoAnimated = ({DATA, SIZINGS, Duration}) => {
	const [LogoPosition, setLogoPosition] = useState('Position4');
	const LOGOPOSITION = {
		Position1: {
			position: 'absolute',
			top: `1%`,
			left: '1%',
		},
		Position2: {
			position: 'absolute',
			top: `1%`,
			right: '1%',
			transformOrigin: 'top right',
		},
		Position3: {
			position: 'absolute',
			bottom: `1%`,
			left: '1%',
			transformOrigin: 'bottom left',
		},
		Position4: {
			position: 'absolute',
			bottom: `1%`,
			right: '1%',
			transformOrigin: 'bottom right',
		},
	};

	// Position2
	// console.log(DATA.Settings?.LogoPosition);

	useEffect(() => {
		if (DATA.Settings?.LogoPosition !== undefined) {
			setLogoPosition(DATA.Settings.LogoPosition);
		}
	}, [DATA]);

	return DATA?.BrandLogo === undefined ? (
		false
	) : (
		<div style={LOGOPOSITION[LogoPosition]}>
			<AnimateElement
				In={0}
				Out={Duration - 15}
				ANIMATEIN="FadeInMoveDown"
				ANIMATEINOUT="FadeOutMoveUp"
			>
				<Img
					src={`${DATA.BrandLogo.URL}`}
					height={SIZINGS.LOGO.height}
					width={SIZINGS.LOGO.width}
				/>
			</AnimateElement>
		</div>
	);
};
