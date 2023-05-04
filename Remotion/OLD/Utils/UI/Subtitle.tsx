import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';


const subtitle: React.CSSProperties = {
	color:'white',
	fontSize: 40,
	textAlign: 'center',
	position: 'absolute',
	bottom: 140,
	width: '100%',
};



export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div style={{...subtitle, opacity}}>
			our video assembly builder
		</div>
	);
};
