import { ContainerTransparentColumn } from "../../../../../Utils/UI/Containers/glass"
import { P } from "../../../../../Utils/UI/Static_Copy"


// <SmallDisclaimerAtBottom SIZINGS={SIZINGS} COPY={Disclaimer} />
export const SmallDisclaimerAtBottom = (props)=>{
	console.log(props.DATA.LongCopy)
	const {SIZINGS, DATA} = props
  return(
    <ContainerTransparentColumn>
				<div
					style={{
						position: 'absolute',
						bottom: '20px',
					}}
				>
          
					<P
						lineHeight="1em"
						size={SIZINGS.DISCLAIMER}
						margin="1em 0 0 0"
						color="#fff"
						weight={300}
					>
						{DATA.LongCopy}
					</P>
				</div>
			</ContainerTransparentColumn>
  )
}