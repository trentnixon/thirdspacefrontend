import { useState } from "react";
import { Container, Group } from "@mantine/core";

//import { RemotionPlayer } from "../../../components/Pages/Video/Player";
import MembersShell from "../../../components/template/MembersShell";
import { BTN_LINK } from "../../../components/ui/btn";
import { H1 } from "../../../components/ui/type";
import {SideBar} from '../../../components/Pages/Video/SideBar'
//import {AddNewSequence} from '../../../components/Pages/Video/AddSequence'
import { fetcher } from "../../../lib/api";

const qs = require("qs");
const query = qs.stringify(
  {
    populate: [
      "video_placeholder_type",
      "video_placeholders",
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

const CreateNewVideo = ({ Modules }) => {

  const [Sequence, setSequence] = useState(false)
console.log(Modules)

  return (
    <MembersShell SIDEBAR={<SideBar setSequence={setSequence} Sequence={Sequence}/>}>
      <Container size={"xl"}>
        <Group position="right">
          <BTN_LINK HREF={`/thirdspace/`} LABEL={`Back`} />
        </Group>
        <H1>Create a Video</H1>
    
      </Container>
    </MembersShell>
  );
};

export default CreateNewVideo;

///api/video-modules

export async function getStaticProps() {
  
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/video-modules/?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );
  let Modules = response.data;
  return {
    props: { Modules: Modules }
  }
}


