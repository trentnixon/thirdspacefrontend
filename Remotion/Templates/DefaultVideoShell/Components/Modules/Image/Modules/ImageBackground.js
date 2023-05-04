import {AbsoluteFill, Img} from 'remotion';

export const ImageBackground=({STYLES, MEDIA})=>{
  return(
		<AbsoluteFill style={STYLES}>
			<Img src={`${MEDIA.URL}`}/>
		</AbsoluteFill>
  )
}