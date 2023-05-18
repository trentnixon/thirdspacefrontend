import MembersShell from "../../../components/template/MembersShell";
import { Container, Group } from "@mantine/core";
import { useEffect, useState } from "react";

import { BTN_FUNC, BTN_LINK } from "../../../components/ui/btn";
import { H1, P } from "../../../components/ui/type";
import { fetcher } from "../../../lib/api";
import { useSessionDetails } from "../../../lib/session";
import { SelectCampaignFromTable } from "../../../components/Pages/Campaign/selectCampaignTable";
import { CreateNewCampaign } from "../../../components/Pages/Campaign/createNewCampaign";
import Link from "next/link";

const qs = require("qs");
const query = qs.stringify(
  {
    populate: [
      "brand",
      "videos",
      "videos.campaign",
      "videos.dataset",
      "videos.renders",
      "datasets",
      "datasets.data_set_rows",
      "datasets.data_set_rows.data_set_items",
      "video_assets",
      "video_assets.Value",
      "video_assets.video_placeholder_type",
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

const Campaign = (props) => {
  const { Response } = props;
  const { session, updateSession } = useSessionDetails();
  const [isNew, setIsNew] = useState(false);

  const handleUpdateSession = (Campaign, Brand) => {
    updateSession({
      ...session,
      brand: Brand,
      campaign: Campaign,
    });
  };

  const handleSelectNewCampaign = () => {
    updateSession({
      ...session,
      brand: null,
      campaign: null,
    });
  };



  useEffect(() => {
  //console.log("echo session in Campaign.js ", session);
  }, [session]);



  return (
    <MembersShell>
      <Container size={"xl"}>
        <Group position="right" my={20}>
         
          <BTN_LINK 
            HREF={`/thirdspace/campaign/create`}
            LABEL={`Create New`}          
          />
        </Group>
      </Container>
      <Container size={"xl"}>
        <H1>Campaigns</H1>

        <SelectCampaignFromTable
          Response={Response}
          handleUpdateSession={handleUpdateSession}
        />
      </Container>
    </MembersShell>
  );
};

Campaign.getInitialProps = async (ctx) => {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/campaigns?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );
  let Response = response.data;
  return {
    Response,
  };
};

export default Campaign;