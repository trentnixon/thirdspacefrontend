import {Img} from 'remotion';
import { AnimateElement } from "../../../../../../Utils/Animations/RemotionAnimate"
/*
<BrandLogoCenterAnimated
				DATA={DATA}
				SIZINGS={SIZINGS}
				Duration={Duration}
			/>
*/
export const BrandLogoCenterAnimated = ({DATA,SIZINGS,Duration})=>{
  return(
    DATA?.BrandLogo === undefined ? (
      false
    ) : (
      <div
        style={{
          position: 'absolute',
          top: `calc(50% - ${SIZINGS.LOGO.height}px )`,
          left: '50%',
          transform: 'translateX(-50%)',
          transformOrigin: 'center center',
        }}
      >
        
        <AnimateElement
          In={0}
          Out={Duration - 15}
          ANIMATEIN="FadeInMoveDown"
          ANIMATEINOUT="FadeOutMoveUp"
        >
          
          <Img
            src={`${DATA.BrandLogo.URL}`}
            height={SIZINGS.LOGO.height}
            width={SIZINGS.LOGO.width}
          />
        </AnimateElement>
      </div>
    )
  )
}