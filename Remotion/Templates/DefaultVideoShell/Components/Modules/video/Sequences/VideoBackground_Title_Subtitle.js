import {Sequence} from 'remotion';
import styled from 'styled-components';

import {Subtitle} from '../../../../../../Utils/UI/Subtitle';
import {Title} from '../../../../../../Utils/UI/Title';
import { BackgroundVideoandStyles } from '../Modules/ImportBackgroundVideoandStyles';

const STYLES = {
	landscape: {zIndex: 0, position: 'absolute'},
	portrait: {
		zIndex: 0,
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
};

export const ModuleVideoBackgroundTitleSubtitle916 = ({DATA}) => {
	const STYLE = STYLES.landscape;
	return <ModuleContainer DATA={DATA} STYLES={STYLE} />;
};

export const ModuleVideoBackgroundTitleSubtitle45 = ({DATA}) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer DATA={DATA} STYLES={STYLE} />;
};

export const ModuleVideoBackgroundTitleSubtitleSQ = ({DATA}) => {
	console.log(DATA.DATA)
	const STYLE = STYLES.portrait;
	return <ModuleContainer DATA={DATA} STYLES={STYLE} />;
};

const ModuleContainer = ({DATA, STYLES}) => {
	return (
		<>
			<CenterTitles>
				<Sequence>
					<Title titleText={DATA.Title} />
				</Sequence>
				<Sequence from={35}> 
					<Subtitle />
				</Sequence>
			</CenterTitles>
			<BackgroundVideoandStyles STYLES={STYLES} VIDEO={DATA.BackgroundVideo}/>
		
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
