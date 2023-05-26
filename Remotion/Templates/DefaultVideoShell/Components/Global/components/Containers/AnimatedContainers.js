import { useEffect, useState,useCallback } from 'react';
// UTILS
import {VerticalDrop} from '../../../../../../Utils/UI/Containers/glass';
import {FlatColorContainer} from '../../../../../../Utils/UI/Containers/Generic';
import {
	FromBottomToTop,
} from '../../../../../../Utils/Animations/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Utils/Animations/interpolate';
import {AnimateElement} from '../../../../../../Utils/Animations/RemotionAnimate';
// <GlassBoxRevealVertial frame={frame} Duration={Duration}>

export const GlassBoxRevealVertial = (props) => {
	const {frame, Duration} = props;
	return (
		<VerticalDrop
			style={{
				clipPath: FromBottomToTop(0, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					Duration - 15,
					Duration,
					1,
					0
				),
			}}
		>
			{props.children}
		</VerticalDrop>
	);
};


export const FlatColorRevealHorizontal = ({ Duration, RESOLUTION, DATA, children, Theme }) => {
  
  const [initialInX, setinitialInX] = useState(0);
  const [x, setX] = useState(0);
  const [useDirection, setDirection] = useState('left')
  // Calculate initialX and x based on RESOLUTION
  const createLeft = useCallback(() => {
    setinitialInX(-RESOLUTION.w);
    setX(-(RESOLUTION.w/2));
  }, [RESOLUTION.w]);

  const createRight = useCallback(() => {
    setinitialInX(RESOLUTION.w);
    setX(RESOLUTION.w / 2);
  }, [RESOLUTION.w]);

  useEffect(() => {
    useDirection === 'left' ? createLeft() : createRight();
  }, [useDirection, createLeft, createRight]);


	useEffect(()=>{
		if(DATA.Settings?.ContainerDirection !== undefined)
			{
				setDirection(DATA.Settings?.ContainerDirection)
			}
	},[DATA])


  const containerStyle = {
    backgroundColor: Theme.BackgroundColor,
    width: `${RESOLUTION.w}px`,
  };

  return (
    <AnimateElement
      In={0}
      Out={Duration - 15}
      ANIMATEIN="MoveInFromSide"
      ANIMATEINOUT="MoveOutFromSide"
      initialInX={initialInX}
      Inx={x}
      initialOutX={0}
      Outx={initialInX}
      ease="Smooth"
    >
      <FlatColorContainer style={containerStyle}>
        {children}
      </FlatColorContainer>
    </AnimateElement>
  );
};



export const FlatColorRevealHorizontalFullScreen = ({ Duration, RESOLUTION, DATA, children, Theme }) => {
  
  const [initialInX, setinitialInX] = useState(0);
  const [x, setX] = useState(0);
  const [useDirection, setDirection] = useState('left')
  // Calculate initialX and x based on RESOLUTION
  const createLeft = useCallback(() => {
    setinitialInX(-RESOLUTION.w);
    setX(0);
  }, [RESOLUTION.w]);

  const createRight = useCallback(() => {
    setinitialInX(RESOLUTION.w);
    setX(0);
  }, [RESOLUTION.w]);

  useEffect(() => {
    useDirection === 'left' ? createLeft() : createRight();
  }, [useDirection, createLeft, createRight]);


	useEffect(()=>{
		if(DATA.Settings?.ContainerDirection !== undefined)
			{
				setDirection(DATA.Settings?.ContainerDirection)
			}
	},[DATA])


  const containerStyle = {
    backgroundColor: Theme.BackgroundColor,
    width: `${RESOLUTION.w}px`,
  };

  return (
    <AnimateElement
      In={30}
      Out={Duration - 0}
      ANIMATEIN="MoveInFromSide"
      ANIMATEINOUT="MoveOutFromSide"
      initialInX={initialInX}
      Inx={x}
      initialOutX={0}
      Outx={initialInX}
      ease="Smooth"
    >
      <FlatColorContainer style={containerStyle}>
        {children}
      </FlatColorContainer>
    </AnimateElement>
  );
};