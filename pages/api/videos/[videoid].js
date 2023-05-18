// File: pages/api/craft/brands/[brandid]/campaigns/[campaignid].js

import axios from "axios";
const qs = require("qs");
const Fetchquery = qs.stringify(
  {
   /*  populate: [
      "brand",
      "videos",
    ], */
  },
  {
    encodeValuesOnly: true,
  }
);
export default async function handler(req, res) {
  const {
    query: { videoid },
  } = req;

  
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/videos/${videoid}?${Fetchquery}`
    );
 
    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res
        .status(response.status)
        .json({ message: "An error occurred while fetching data" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
}
