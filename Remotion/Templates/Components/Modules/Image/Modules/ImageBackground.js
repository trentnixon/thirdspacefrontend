import { useEffect } from 'react';
import { useState } from 'react';
import {AbsoluteFill, useCurrentFrame, Img, interpolate} from 'remotion';

export const ImageBackground = (props) => {
	const {STYLES, MEDIA, Duration = 180} = props;
	const frame = useCurrentFrame();
	const SCALEBY = {
		IN: interpolate(frame, [0, Duration], [1, 1.1], {
			extrapolateRight: 'clamp',
		}),
		OUT: interpolate(frame, [0, Duration], [1.1, 1], {
			extrapolateRight: 'clamp',
		}),
		NONE: interpolate(frame, [0, Duration], [1, 1], {
			extrapolateRight: 'clamp',
		}),
	};
	return (
		<AbsoluteFill style={STYLES}>
			<Img
				src={`${MEDIA}`}
				width="2000px"
				style={{
					transform: `scale(${
						SCALEBY[
							MEDIA?.Settings?.scale === undefined
								? 'NONE'
								: MEDIA.Settings.scale
						]
					})`,
				}}
			/>
		</AbsoluteFill>
	);
};

export const ImageBackgroundPush = (props) => {
  const {STYLES, MEDIA, DATA, Duration = 180} = props;
  const frame = useCurrentFrame();
	const [useDirection, setDirection] = useState('left')
	const [translateBy, setTranslateBy] = useState(250)
  let translateValue;
	useEffect(() => {
    useDirection === 'left' ? setTranslateBy(250) : setTranslateBy(-250);
  }, [useDirection]);

	
	useEffect(()=>{
		if(DATA.Settings?.ContainerDirection !== undefined)
			{
				setDirection(DATA.Settings?.ContainerDirection)
			}
	},[DATA])

	DATA.Settings?.ContainerDirection
  if (frame <= 7) {
    translateValue = interpolate(frame, [0, 7], [0, translateBy], {
      extrapolateRight: 'clamp',
    });
  } else if (frame >= Duration - 10) {
    translateValue = interpolate(frame, [Duration - 10, Duration], [translateBy, 0], {
      extrapolateRight: 'clamp',
    });
  } else {
    translateValue = translateBy;
  }

  console.log(translateValue);

  return (
    <AbsoluteFill style={STYLES}>
      <Img
        src={`${MEDIA}`}
        width="2000px"
        style={{
          transform: `translateX(${translateValue}px)`,
        }}
      />
    </AbsoluteFill>
  );
};


/*

	<AnimateElement
		In={0}
		Out={Duration - 15}
		ANIMATEIN="MoveInFromSide"
		ANIMATEINOUT="MoveOutFromSide"
		initialInX={-100}
		Inx={0}
		initialOutX={0}
		Outx={0}
		ease="Smooth">
			</AnimateElement>
*/
