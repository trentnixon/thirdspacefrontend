import {Sequence} from 'remotion';
// Import styled from 'styled-components';

/* import {calculateImageSize} from '../../../../Utils/FUNC/imageFunctions';
import {BackgroundVideoandStyles} from '../../Global/components/backgrounds/VideoBackground'; */
import {ManshakeTwoImagesAndHero} from './sequencePackages/ManshakeTwoImagesAndHero';

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

const DefaultDisclamer = `The views and opinions expressed in this TV commercial are solely
those of the advertiser and do not necessarily reflect the views and
opinions of the network or its affiliates.`;

export const ManshakeTwoImagesAndHero916 = (props) => {

	const STYLE = STYLES.landscape;
	const SIZINGS = {
		IMAGE:{
			HEIGHT:'1080px'
		},
		POSITIONS:{
			LEFT:0,
			RIGHT:960,
			UP:-1080,
			DOWN:1080
		},
		TITLE: '7em',
		WEIGHTLOSS: '8em',
		DISCLAIMER: '1.8em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const ManshakeTwoImagesAndHero45 = (props) => {

	const STYLE = STYLES.portrait;
	const SIZINGS = {
		IMAGE:{
			HEIGHT:'1080px'
		},
		POSITIONS:{
			LEFT:0,
			RIGHT:960,
			UP:-1080,
			DOWN:1080
		},
		TITLE: '6.5em',
		WEIGHTLOSS: '6.5em',
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const ManshakeTwoImagesAndHeroSQ = (props) => {

	const STYLE = STYLES.portrait;
	const SIZINGS = {
		IMAGE:{
			HEIGHT:'1080px'
		},
		POSITIONS:{
			LEFT:0,
			RIGHT:960,
			UP:-1080,
			DOWN:1080
		},
		TITLE: '7em',
		WEIGHTLOSS: '6.5em',
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

const ModuleContainer = (props) => {
	const {DATA, STYLES, SIZINGS, Duration, Theme} = props;

	return (
		<Sequence>
			<ManshakeTwoImagesAndHero
				SIZINGS={SIZINGS}
				DATA={DATA}
				Duration={Duration}
				Disclaimer={DefaultDisclamer}
				STYLES={STYLES}
				Theme={Theme}
			/>
		</Sequence>
	);
};
