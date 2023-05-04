import {AbsoluteFill, Video} from 'remotion';


import React from 'react';

export const ThumbTest = ({VIDEO}) => {
	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill>
				<Video src={`${VIDEO}`} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
