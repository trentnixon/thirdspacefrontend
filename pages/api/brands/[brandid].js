// File: pages/api/brands/[id].js

import axios from "axios";
const qs = require("qs");
export default async function handler(req, res) {
  // Get the id from the request
  const {
    query: { brandid },
  } = req;
  const StrapiQuery = qs.stringify(
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
        "video_assets",
        "video_assets.Value",
        "video_assets.video_placeholder_type",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  try {
    // Fetch data from your API for a specific brand id
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/brands/${brandid}?${StrapiQuery}`
    );

    // Return data from the request
    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res
        .status(response.status)
        .json({ message: "An error occurred while fetching data" });
    }
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
}
