import React, {useRef, useState, useEffect} from 'react';
import { FromLeftToRight } from '../../../../../Utils/Animations/ClipWipe';
import {AnimateElement} from '../../../../../Utils/Animations/RemotionAnimate';
import {P} from '../../../../../Utils/UI/Static_Copy';

/*
<PrefixVariableSuffix
					DATA={DATA}
					SIZINGS={SIZINGS}
					Duration={Duration}
				/>
*/

export const WinningsCopyCenteredFadeIn = (props) => {
	const {Duration, SIZINGS, DATA, Theme} = props;

	const spanRef = useRef(null);
	const [spanWidth, setSpanWidth] = useState(0);

	useEffect(() => {
		if (spanRef.current) {
			setSpanWidth(Number(spanRef.current.offsetWidth));
		}
	}, [spanRef.current]);

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
				textAlign: 'center',
			}}
		>
			<AnimateElement
				In={15}
				Out={Duration - 15}
				ANIMATEIN="FadeIn"
				ANIMATEINOUT="FadeOut"
				ease="Wobbly"
			>
				<div style={{display: 'inline-block'}}>
					<P
						size={SIZINGS.TITLE}
						margin=".3em 1em 0 1em"
						color={Theme?.Primary ? Theme.Primary : 'white'}
						weight={100}
						letterSpacing="2px" 
					>
						{DATA.Prefix}{' '}
						<span ref={spanRef} style={{fontWeight: 900, position: 'relative'}}>
							{DATA.StaticOffer}
							<div style={{position: 'absolute', bottom: '-50px', left: 0,
            clipPath: FromLeftToRight(30,'Wobbly'),}}>
								<AnimateElement
									In={0}
									Out={Duration - 15}
									ANIMATEIN="none"
									ANIMATEINOUT="FadeOut"
									ease="Wobbly"
								>
									{spanWidth > 0 && (
										<svg
											width={spanWidth}
											height="50"
											viewBox="0 0 371 17"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												opacity="0.79"
												fillRule="evenodd"
												clipRule="evenodd"
												d="M2.50001 0.5C13.09 2.5932 23.9233 3.9266 35 4.5C81.853 4.3717 129.353 4.3717 177.5 4.5C231.811 2.1118 286.144 1.2785 340.5 2C347.787 3.3216 355.121 4.3216 362.5 5C365.446 5.8061 368.112 7.1395 370.5 9C369.737 9.9435 368.737 10.4435 367.5 10.5C363.408 9.9905 359.408 9.1571 355.5 8C321.5 7.3333 287.5 7.3333 253.5 8C198.484 11.0218 143.484 13.8551 88.5 16.5C79.3131 15.2415 69.6465 15.2415 59.5 16.5C45.661 16.4859 31.9943 14.9859 18.5 12C13.3222 10.6038 8.32221 8.6038 3.50001 6C0.34161 4.3039 0.00820994 2.4706 2.50001 0.5Z"
												fill="#FB9F30"
											/>
										</svg>
									)}
								</AnimateElement>
							</div>
						</span>{' '}
						{DATA.Suffix}
					</P>
				</div>
			</AnimateElement>
		</div>
	);
};
