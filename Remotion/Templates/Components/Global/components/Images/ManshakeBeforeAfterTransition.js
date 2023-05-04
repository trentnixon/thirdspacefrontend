import { Img} from 'remotion';
import {Animated, Move} from 'remotion-animated';


export const ManshakeBeforeAfterTransition = (props) => {
	const {SIZINGS, DATA} = props;
	console.log(DATA.Duration);

	return (
		<>
			<Animated
				absolute
        style={{
          width:'50%',
          backgroundColor:'red',
          textAlign:'center',
          zIndex: 100,
        }}
				animations={[
					Move({initialX: -(SIZINGS.POSITIONS.RIGHT+5), x:SIZINGS.POSITIONS.RIGHT, y: 0, start: 0}),
					Move({x: -SIZINGS.POSITIONS.RIGHT, y: 0, start: (DATA.Duration/2)}),
					Move({x: 0, y: SIZINGS.POSITIONS.UP, start: (DATA.Duration-30)}),
				]}
			>
				<Img
					src={DATA.IMGBefore}
					style={{
						height: SIZINGS.IMAGE.HEIGHT,
					}}
				/>
			</Animated>
			<Animated
      absolute
				style={{
        width:'50%',
        backgroundColor:'red',
        textAlign:'center',
        zIndex: 100,
      }}
				animations={[
					Move({initialX: -(SIZINGS.POSITIONS.RIGHT+5), x: -SIZINGS.POSITIONS.RIGHT, y: 0, start: 0}),
					Move({initialX:0, x: (SIZINGS.POSITIONS.RIGHT*2), start: (DATA.Duration/2)}),
					Move({x: 0, y: SIZINGS.POSITIONS.DOWN, start: (DATA.Duration-30)}),
				]}
			>
        
				<Img
					src={DATA.IMGAfter}
					style={{
						height: SIZINGS.IMAGE.HEIGHT,
					}}
				/>
     
			</Animated>
		</>
	);
};
