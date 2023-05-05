import MembersShell from "../../../components/template/MembersShell";
import { Container, Group } from "@mantine/core";
import { BTN_LINK } from "../../../components/ui/btn";
import { H1, P } from "../../../components/ui/type";
import { fetcher } from "../../../lib/api";
import { IsCampaignSelected } from "../../../components/Pages/Campaign/isCampaignSelected";
import { CampaignTabs } from "../../../components/Pages/Campaign/CampaignTabs";

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

export const getStaticPaths = async () => {
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

  const path = Response.map((d, i) => {
    return {
      params: {
        id: d.id.toString(),
      },
    };
  });

  return {
    paths: path,
    fallback: false, 
  };
};

const ViewCampaign = ({ campaign }) => {
  return (
    <MembersShell>
      <Group position="right" my={10}>
          <BTN_LINK LABEL={`Back to List`} HREF={`/thirdspace/campaign`} />
          <BTN_LINK
            LABEL={`Create New Campaign`}
            HREF={`/thirdspace/campaign/create`}
          />
        </Group>
        <H1>{campaign.Name}</H1>
        <P> {campaign.brand.data.attributes.Name}</P>

      <IsCampaignSelected campaign={campaign} />

      <CampaignTabs Campaign={campaign} />
    </MembersShell>
  ); 
};

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const id = params.id;
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/campaigns/${id}?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );
  let campaign = response.data;

  return {
    props: {
      campaign: campaign.attributes,
    },
  };
}

export default ViewCampaign;
