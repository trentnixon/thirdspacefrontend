import { Group } from "@mantine/core";
import { useEffect } from "react";

import { SelectBrandFromTable } from "../../../components/Pages/Brand/selectBrandTable";
import MembersShell from "../../../components/template/MembersShell";
import {  BTN_LINK } from "../../../components/ui/btn";
import { H1,} from "../../../components/ui/type";
import { fetcher } from "../../../lib/api";
import { useSessionDetails } from "../../../lib/session";
const qs = require("qs");
const query = qs.stringify(
  {
    populate: [
      "campaigns",
      "campaigns.videos",
      "campaigns.videos.campaign",
      "campaigns.videos.dataset",
      "campaigns.videos.renders",
      "campaigns.video_assets",
      "campaigns.video_assets.Value",
      "campaigns.video_assets.video_placeholder_type",
      "campaigns.datasets",
      "campaigns.datasets.data_set_rows",
      "campaigns.datasets.data_set_rows.data_set_items",
      "LOGO",
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

const Brand = (props) => {
  const { Response } = props;
  const { session, updateSession } = useSessionDetails();

  const handleUpdateSession = (Brand) => {
    updateSession({
      ...session,
      brand: Brand,
    });
  };

  useEffect(() => {
  //console.log("echo session in Brand.js ", Response);
  }, [session]);

  return (
    <MembersShell>
      <Group position="right" my={20}>
        <BTN_LINK LABEL={`Create New`} HREF={`/thirdspace/brand/create`} />
      </Group>
      <Group position="apart">
        <H1>Brands</H1>
      </Group>
      <SelectBrandFromTable Response={Response} />
    </MembersShell>
  );
};

Brand.getInitialProps = async (ctx) => {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/brands?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );
  let Response = response.data;
//console.log("Response:")
//console.log(Response)
  return {
    Response,
  };
};

export default Brand;
