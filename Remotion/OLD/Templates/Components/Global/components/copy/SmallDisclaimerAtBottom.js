import { ContainerTransparentColumn } from "../../../../../Utils/UI/Containers/glass"
import { P } from "../../../../../Utils/UI/Static_Copy"


// <SmallDisclaimerAtBottom SIZINGS={SIZINGS} COPY={Disclaimer} />
export const SmallDisclaimerAtBottom = ({SIZINGS, COPY})=>{

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
						weight={100}
					>
						{COPY}this is the disclaimer copy
					</P>
				</div>
			</ContainerTransparentColumn>
  )
}