import { useState } from "react";
import { fetcher } from "../../lib/api";
const qs = require("qs");

export const useGETCampaignVideos = () => {
  const [VideoAssets, setVideoAssets] = useState(null);
  const [working, setWorking] = useState(null);

  const GetVideoAssets = async (CampaignID) => {
    setWorking(true);

    const VideoAssetsquery = qs.stringify(
      {
        filters: {
          campaign: {
            id: { $eq: CampaignID },
          },
         
        },
        populate: [
          "video_placeholder_type",
          "video_placeholders",
          "campaign",
          "Value",
        ],
      },
      {
        encodeValuesOnly: true,
      }
    );

    try {
      const VideoAssetsRes = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/video-assets/?${VideoAssetsquery}`,
        {
          headers: {
            "Content-Type": "application/json",
            //Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      );
      let VideoAssets = VideoAssetsRes.data;
      console.log(VideoAssets)
      setVideoAssets(VideoAssets);
      setWorking(false);
    } catch (err) {
      setVideoAssets(err);
      setWorking(false);
    }
  };

  return [VideoAssets, GetVideoAssets, working];
};
