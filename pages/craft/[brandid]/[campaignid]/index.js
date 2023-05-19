// File: pages/craft/[brandid]/[campaignid]/index.js

import { useRouter } from "next/router";
import { BTN_LINK } from "../../../../components/ui/btn";
import CraftShell from "../../../../components/template/CraftShell";
import { H1, H3, P } from "../../../../components/ui/Client_type";
import { VideoCard } from "../../../../components/Pages/Craft/VideoCards/card";
import { Group, SimpleGrid } from "@mantine/core";
import { PREBUILT_BACKBTN } from "../../../../components/ui/Client_btn";
// Fetch all campaigns of a brand
// Fetch all brands
async function fetchBrands() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}brands/`);
  const brands = await res.json();
  return brands.data;
}

async function fetchCampaigns(brandid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}campaigns/?brandid=${brandid}`
  );
  const campaigns = await res.json();

  return campaigns.data;
}

// Fetch a specific campaign
async function fetchCampaign(brandid, campaignid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}campaigns/${campaignid}`
  );
  const campaign = await res.json();

  return campaign;
}

// Main Component
const CampaignIndex = ({ campaign }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <CampaignInfo campaign={campaign} />;
};

export default CampaignIndex;

export async function getStaticPaths() {
  const brands = await fetchBrands();
  let paths = [];

  for (let brand of brands) {
    const campaigns = await fetchCampaigns(brand.id);

    for (let campaign of campaigns) {
      paths.push({
        params: {
          brandid: brand.id.toString(),
          campaignid: campaign.id.toString(),
        },
      });
    }
  }

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const campaign = await fetchCampaign(params.brandid, params.campaignid);

  return { props: { campaign: campaign.data }, revalidate: 10 };
}

// component
const CampaignInfo = (props) => {
  const { campaign } = props;
  //console.log(campaign);
  const router = useRouter();
  //console.log(router.query.brandid);
  //  console.log(props.brand.attributes.campaigns.data);
  return (
    <CraftShell>
      <Group position="apart" mb={20}>
        <H1>{campaign.attributes.Name}</H1>
        <PREBUILT_BACKBTN />
      </Group>

      <P>{campaign.attributes.Description}</P>
      <H3>Video Options</H3>

      <SimpleGrid cols={2} mt={15}>
        {campaign.attributes.videos.data.map((video, i) => {
          return <VideoCard Video={video} key={i} />;
        })}
      </SimpleGrid>
    </CraftShell>
  );
};
