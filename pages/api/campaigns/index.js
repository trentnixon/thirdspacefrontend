// File: pages/api/brands/[brandid]/campaigns.js

import axios from "axios";
const qs = require("qs");

export default async function handler(req, res) {
  const {
    query: { brandid },
  } = req;

  const StrapiQuery = qs.stringify(
    {
      filters: {
        brand: {
          id: { $eq: brandid },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/campaigns?${StrapiQuery}`
    );
    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res
        .status(response.status)
        .json({ message: "An error occurred while fetching data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/*  populate: [
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
      ], */
