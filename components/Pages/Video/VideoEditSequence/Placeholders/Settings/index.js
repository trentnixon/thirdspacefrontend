import { SelectFPS } from "./FPS"
import { ImageScale } from "./ImageScale"

export const SequenceSettings = (props)=>{

    return(
        
        <>
            <SelectFPS {... props} />
            <ImageScale  {... props}/>
        </>
    )
}