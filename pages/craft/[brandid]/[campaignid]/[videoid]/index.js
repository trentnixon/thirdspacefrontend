// File: pages/craft/[brandid]/[campaignid]/[videoid]/index.js

import { useRouter } from "next/router";

async function fetchBrands() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}brands/`
  );
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

async function fetchVideos(brandid, campaignid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}videos?campaign=${campaignid}`
  );
  const videos = await res.json();

  return videos.data;
}

async function fetchVideo(brandid, campaignid, videoid) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}videos/${videoid}`
  );
  const video = await res.json();

  return video;
}

const VideoPage = ({ video }) => {

  console.log(video)

  return <>
    <h1>{video.attributes.Name}</h1>
  </>;
};
export default VideoPage;

export async function getStaticPaths() {
  const brands = await fetchBrands();
  let paths = [];

  for (let brand of brands) {
    const campaigns = await fetchCampaigns(brand.id);

    for (let campaign of campaigns) {
      const videos = await fetchVideos(brand.id, campaign.id);

      for (let video of videos) {
        paths.push({
          params: {
            brandid: brand.id.toString(),
            campaignid: campaign.id.toString(),
            videoid: video.id.toString(),
          },
        });
      }
    }
  }

  return { paths, fallback: "blocking" };
}


export async function getStaticProps({ params }) {
  const video = await fetchVideo(
    params.brandid,
    params.campaignid,
    params.videoid
  );

  return { props: { video: video.data }, revalidate: 10 };
}