import { useRouter } from "next/router";
import MembersShell from "../../../../components/template/MembersShell";
import { Group } from "@mantine/core";
import { BTN_LINK, PREBUILT_BACKBTN } from "../../../../components/ui/btn";
import { H1, P } from "../../../../components/ui/type";
import { fetcher } from "../../../../lib/api";
import { IsCampaignSelected } from "../../../../components/Pages/Campaign/isCampaignSelected";
import { CampaignTabs } from "../../../../components/Pages/Campaign/CampaignTabs";

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

const ViewCampaign = ({ campaign }) => {
  /*//console.log("campaign")
//console.log(campaign) */
  const router = useRouter();
  return (
    <MembersShell>
      <Group position="right" my={10}>
        <PREBUILT_BACKBTN />
      </Group>
      <H1>{campaign.Name}</H1>
      <P> {campaign.brand?.data?.attributes?.Name}</P>

      <IsCampaignSelected campaign={campaign} CampaignID={router.query.id} />

      <CampaignTabs Campaign={campaign} CampaignID={router.query.id} />
    </MembersShell>
  );
};

export async function getServerSideProps(ctx) {
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
      campaign: campaign?.attributes,
    },
  };
}

export default ViewCampaign;
