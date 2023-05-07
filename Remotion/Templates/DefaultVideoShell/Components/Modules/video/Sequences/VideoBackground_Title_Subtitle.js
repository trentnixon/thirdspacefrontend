import {Sequence} from 'remotion';
import styled from 'styled-components';
import {
	ClipInTitle,
	ClipInTagline,
} from '../../../../../../Utils/UI/Copy/Titles';

import {BackgroundVideoandStyles} from '../Modules/ImportBackgroundVideoandStyles';

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

export const ModuleVideoBackgroundTitleSubtitle916 = (props) => {
	const STYLE = STYLES.landscape;
	return <ModuleContainer {... props} STYLES={STYLE} />;
};

export const ModuleVideoBackgroundTitleSubtitle45 = (props) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer {... props} STYLES={STYLE} />;
};

export const ModuleVideoBackgroundTitleSubtitleSQ = (props) => {
	const STYLE = STYLES.portrait;
	return <ModuleContainer {... props} STYLES={STYLE} />;
};

const ModuleContainer = (props) => {
	const {DATA, Theme, STYLES} = props
	return (
		<Sequence>
			<CenterTitles>
				<ClipInTitle start={3} DATA={DATA} Theme={Theme}>
					{DATA.Title}
				</ClipInTitle>
				<ClipInTagline start={3} DATA={DATA} Theme={Theme}>
					{DATA.Tagline}
				</ClipInTagline>
			</CenterTitles>
			<BackgroundVideoandStyles STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />
		</Sequence>
	);
};

const CenterTitles = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
  flex-direction:column;
	z-index: 100;
`;