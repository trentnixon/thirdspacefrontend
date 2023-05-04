import { Container } from "@mantine/core"
import { P } from "../../../ui/type"

export const VideoDetials = ({VideoOBJ})=>{
    return(
        <Container>
        
        <P>Details</P>
        <P>{VideoOBJ.Series.length} Sequences</P>
        </Container>
    )
}