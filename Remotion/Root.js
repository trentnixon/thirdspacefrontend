/* import {Composition} from 'remotion';
import {VideoShell916} from './Templates/DefaultVideoShell/Video_916';
import {VideoShell45} from './Templates/DefaultVideoShell/Video_45';
import {VideoShellSQ} from './Templates/DefaultVideoShell/Video_SQ';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot = () => {
	const sumNumbersInObject = (obj) => {
		if (obj) {
			return obj.reduce((acc, {Duration}) => {
				if (Duration && typeof Duration === 'number') {
					return acc + Duration;
				}
				return acc;
			}, 0);
		}

		return Object.values(obj).reduce((acc, val) => {
			if (typeof val === 'number') {
				return acc + val;
			}
			return acc;
		}, 0);
	};

	const OBJ = {
		Theme: {
			Primary: '#2871B1', 
			Secondary: '#AA506E',
			Dark: '#3E4756',
			Light: '#F2FAFF',
		},
		Series: [
			{
				component: 'ModuleVideoBackgroundSingleText',
				Duration: 120,
				DATA: {
					Title: 'Animation TEst',
					BackgroundVideo:
						'http://localhost:1337/uploads/motion_escalators_at_the_modern_shopping_mall_timelapse_hyperlapse_a_multi_sto_SBV_306914357_preview_f5c233f9b3.mp4?updated_at=2023-02-20T04:06:09.253Z',
				},
			},
			{
				component: 'ModuleVideoBackgroundNoText',
				Duration: 60,
				DATA: {
					BackgroundVideo:
						'http://localhost:1337/uploads/slowmo_tracking_of_unrecognizable_young_women_carrying_shopping_bags_and_walki_SBV_338763437_preview_c172f8744e.mp4?updated_at=2023-02-20T01:51:42.665Z',
				},
			},
			{
				component: 'ModuleVideoBackgroundLogoOfferDisclamer',
				Duration: 120,
				DATA: {
					Variable:'$600*',
					Prefix:'',
					Suffix:'OFF',
					BackgroundVideo:
						'http://localhost:1337/uploads/tracking_shot_of_a_luxury_kitchen_with_white_classic_design_SBV_336452535_preview_8076bcf15e.mp4?updated_at=2023-02-20T01:52:02.898Z',
					titleText: 'This is 3rd Space assembly.',
					Logo: {
						URL:'http://localhost:1337/uploads/800px_AEG_Logo_Red_CMYK_svg_2856202847.png?updated_at=2023-02-20T02:01:52.432Z',
						height:303,
						width:800
					}
				},
			},
			{
				component: 'ModuleVideoBackgroundLogoOfferDisclamer',
				Duration: 120,
				DATA: {
					Variable:'$200*',
					Prefix:'',
					Suffix:'OFF',
					BackgroundVideo:
						'http://localhost:1337/uploads/modern_minimalistic_hotel_bathroom_with_marble_tiles_SBV_315608611_preview_028cc37876.mp4?updated_at=2023-02-20T01:51:55.931Z',
					titleText: 'This is 3rd Space assembly.',
					Logo: {
						URL:'http://localhost:1337/uploads/Miele_Logo_M_Red_s_RGB_b3b5692d0b.png?updated_at=2023-02-20T04:12:39.272Z',
						height:766,
						width:2000
					}
				},
			},
			{
				component: 'ModuleVideoBackgroundLogoOfferDisclamer',
				Duration: 120,
				DATA: {
					Variable:'15%',
					Prefix:'SAVE UP TO ',
					Suffix:'',
					BackgroundVideo:
						'http://localhost:1337/uploads/realistic_planet_earth_from_space_SBV_311186048_preview_9d62169881.mp4?updated_at=2023-02-20T01:44:42.641Z',
					titleText: 'This is 3rd Space assembly.',
					Logo: {
						URL:'http://localhost:1337/uploads/1280px_Neff_Unternehmen_logo_svg_a9440204db.png?updated_at=2023-02-20T04:14:34.485Z',
						height:426,
						width:1280
					}
				},
			},
			{
				component: 'ModuleVideoBackgroundLogoOfferDisclamer',
				Duration: 120,
				DATA: {
					Variable:'10 YEAR',
					Prefix:'',
					Suffix:`MANUFACTURER'S WARRENTY*`,
					BackgroundVideo:
						'http://localhost:1337/uploads/altantica_avenue_at_copacabana_beach_in_rio_de_janeiro_brazil_travel_destinati_SBV_347397025_preview_a6a3e22359.mp4?updated_at=2023-02-16T04:25:27.275Z',
					titleText: 'This is 3rd Space assembly.',
					Logo: {
						URL:'http://localhost:1337/uploads/vzug_570x570_d875546440.png?updated_at=2023-02-20T04:15:33.043Z',
						height:570,
						width:570
					}
				},
			},
			{
				component: 'ModuleVideoBackgroundNoText',
				Duration: 60,
				DATA: {
					BackgroundVideo:
						'http://localhost:1337/uploads/two_lovely_ladies_enjoying_their_shopping_weekend_SBV_315925820_preview_1bb536ef1b.mp4?updated_at=2023-02-20T04:00:40.728Z',
				},
			},
			{
				component: 'ModuleVideoBackgroundSingleText',
				Duration: 210,
				DATA: {
					Title: 'Outro call to action with a logo',
					BackgroundVideo:
						'http://localhost:1337/uploads/shopping_mall_interior_shop_center_time_lapse_crowd_of_people_buying_SBV_303493912_preview_583dee0b02.mp4?updated_at=2023-02-20T04:06:12.980Z',
				},
			}
		],
	};
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="VideoShell916"
				component={VideoShell916}
				durationInFrames={sumNumbersInObject(OBJ.Series)}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					DATA: OBJ,
				}}
			/>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="VideoShell45"
				component={VideoShell45}
				durationInFrames={sumNumbersInObject(OBJ.Series)}
				fps={30}
				width={1080}
				height={1350}
				defaultProps={{
					DATA: OBJ,
				}}
			/>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="VideoShellSQ"
				component={VideoShellSQ}
				durationInFrames={sumNumbersInObject(OBJ.Series)}
				fps={30}
				width={1920}
				height={1920}
				defaultProps={{
					DATA: OBJ,
				}}
			/>
		</>
	);
};
 */