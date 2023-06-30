import {Sequence} from 'remotion';
// Import styled from 'styled-components';


import {BackgroundVideoandStyles} from '../../Global/components/backgrounds/VideoBackground';
import {BuildOutro} from './sequencePackages/Build_Outro';

const STYLES = {
	landscape: {zIndex: 0, position: 'absolute', height: '101%'},
	portrait: {
		zIndex: 0,
		position: 'absolute',
		height: '101%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
};

const DefaultDisclamer = `The views and opinions expressed in this TV commercial are solely
those of the advertiser and do not necessarily reflect the views and
opinions of the network or its affiliates.`;

export const WinningsOutro916 = (props) => {

	const STYLE = STYLES.landscape;
	const SIZINGS = {
		ContainerHeight: '60%',
		Logo: {
			width: '50%',
		},
		Create: {
			width: '350px',
		},
		Tagline: {
			FS: '3.5em',
			height: '70px',
		},
		CTA: {
			FS: '2.5em',
		},
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const WinningsOutro45 = (props) => {
	
	const STYLE = STYLES.portrait;
	const SIZINGS = {
		ContainerHeight: '40%',
		Logo: {
			width: '50%', 
		},
		Create: {
			width: '280px',
		},
		Tagline: {
			FS: '2.8em',
			height: '55px',
		},
		CTA: {
			FS: '2.6em',
		},
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

export const WinningsOutroSQ = (props) => {
	
	const STYLE = STYLES.portrait;
	const SIZINGS = {
		ContainerHeight: '100%',
		Logo: {
			width: '60%',
		},
		Create: {
			width: '450px',
		},
		Tagline: {
			FS: '3.5em',
			height: '70px',
		},
		CTA: {
			FS: '3.5em',
		},
	};

	return <ModuleContainer STYLES={STYLE} SIZINGS={SIZINGS} {...props} />;
};

const ModuleContainer = (props) => {
	const {DATA, STYLES, SIZINGS, Duration, Theme} = props;
	// Console.log(DATA);

	return (
		<Sequence>
			<BuildOutro
				SIZINGS={SIZINGS}
				DATA={DATA}
				Duration={Duration}
				Disclaimer={DefaultDisclamer}
				STYLES={STYLES}
				Theme={Theme}
			/>

			<BackgroundVideoandStyles STYLES={STYLES} VIDEO={DATA.BackgroundVideo} />
		</Sequence>
	);
};
