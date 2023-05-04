// Import {useEffect, useState} from 'react';
import {Img} from 'remotion';
import {AnimateElement} from '../../../../../Utils/Animations/RemotionAnimate';
import {useImageOrientation} from '../../../../../Utils/FUNC/imageFunctions';


export const WinningLogoCenteredFadeIn = ({
	DATA,

	Duration,
	In = 15,
	Out = 15,
}) => {
	const orientation = useImageOrientation(DATA?.BrandLogo); 


  const IMGRATIO={
    portrait:250,
    landScape:220
  }

  const imgStyle =
		orientation === 'portrait' ? {width:`${IMGRATIO.portrait}px`} : {height:`${IMGRATIO.landScape}px`};
    const imgTop =
		orientation === 'portrait' ? IMGRATIO.portrait : IMGRATIO.landScape; 
    
	const style = {
		position: 'absolute',
		top: `calc(50% - ${imgTop * 1.15}px )`,
		left: '50%',
		transform: 'translateX(-50%)',
		transformOrigin: 'center center',
		zIndex: 500,

	};

	

	return DATA?.BrandLogo === undefined ? (
		false
	) : (
		<div style={style}>
			<AnimateElement
				In={In}
				Out={Duration - Out}
				ANIMATEIN="FadeIn"
				ANIMATEINOUT="FadeOut"
				ease = 'Wobbly'
			>
				<Img src={`${DATA.BrandLogo}`} style={imgStyle} />
			</AnimateElement>
		</div>
	);
};
