import {Sequence} from 'remotion';
import {ManshakeTwoCardSwap, ManshakeTwoCardSwapAlt} from './sequencePackages/ManshakeTwoCardSwap';

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

export const ManshakeTwoCardSwap916 = (props) => {
	const STYLE = STYLES.landscape;
	const SIZINGS = {
		IMAGE: {
			HEIGHT: '1080px',
		},
		RATIO: {
			HEIGHT: 1080,
			WIDTH: 1920,
		},
		TITLE: '7em',
		WEIGHTLOSS: '8em',
		DISCLAIMER: '1.8em', 
	};

	return <ModuleContainerAlt STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const ManshakeTwoCardSwap45 = (props) => {
	const STYLE = STYLES.portrait;
	const SIZINGS = {
		IMAGE: {
			HEIGHT: '1080px',
		},
		RATIO: {
			HEIGHT: 1350,
			WIDTH: 1080,
		},
		TITLE: '7em',
		WEIGHTLOSS: '5em',
		DISCLAIMER: '1.4em',
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const ManshakeTwoCardSwapSQ = (props) => {
	const STYLE = STYLES.portrait;
	const SIZINGS = {
		IMAGE: {
			HEIGHT: '1080px',
		},
		RATIO: {
			HEIGHT: 1920,
			WIDTH: 1920,
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
			<ManshakeTwoCardSwap 
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

const ModuleContainerAlt = (props) => {
	const {DATA, STYLES, SIZINGS, Duration, Theme} = props;

	return (
		<Sequence>
			<ManshakeTwoCardSwapAlt 
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
