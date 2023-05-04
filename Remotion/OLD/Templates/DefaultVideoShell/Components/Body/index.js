import {Sequence, AbsoluteFill, Video} from 'remotion';
import styled from 'styled-components';
import {Subtitle} from './UI/Subtitle';
import {Title} from './UI/Title';
export const Body = ({DATA}) => {
	return (
		<>
			<CenterTitles>
				<Sequence>
					<Title titleText={DATA.DATA.titleText} />
				</Sequence>
				<Sequence from={35}>
					<Subtitle />
				</Sequence>
			</CenterTitles>
			<AbsoluteFill
				style={{
					zIndex: 0,
					position: 'absolute',
				}}
			>
				<Video volume={0} src={DATA.BackgroundVideo} />
			</AbsoluteFill>
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
