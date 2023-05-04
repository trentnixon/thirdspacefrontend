import {Sequence, AbsoluteFill, Video} from 'remotion';
import styled from 'styled-components';
import {H1} from '../../../../Utils/UI/Static_Copy';

export const Top_VideoBackground_SingleText = ({DATA}) => {
	//console.log(DATA);
	return (
		<>
			<Sequence>
				<CenterTitles>
					<H1>{DATA.Header}</H1>
				</CenterTitles>
				<AbsoluteFill
					style={{
						zIndex: 0,
						position: 'absolute',
					}}
				>
					<Video volume={0} src={DATA.BackgroundVideo} />
				</AbsoluteFill>
			</Sequence>
		</>
	);
};

const CenterTitles = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;
