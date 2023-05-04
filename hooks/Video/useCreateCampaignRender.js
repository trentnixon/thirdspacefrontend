
import { useState } from "react";
import { fetcher } from "../../lib/api";
const qs = require("qs");

// /api/campaign-renders

export const useCreateCampaignRender = () => {
  const [dataset, setDataset] = useState(null);
  const [isComplete, setIsComplete] = useState(null);

  const CreateCampaignRender = async (OBJ) => {
    setIsComplete(false);
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/campaign-renders`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: OBJ }), 
        }
      );

      setDataset(response);
      setIsComplete(true);
    } catch (err) {
      setDataset(err);
      setIsComplete(true);
    }
  };

  return [dataset, CreateCampaignRender, isComplete];
};


export const useGetCampaignRender = () => {
  const [isCampaignRender, setisCampaignRender] = useState(null);
 

  const GetCampaignRender = async (ID) => {
    const query = qs.stringify(
      {
        populate: [
          "renders ",
        
        ],
      },
      {
        encodeValuesOnly: true,
      }
    );
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/campaign-renders/${ID}?${query}`,
        {
       
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

     /*  console.log(response.data) */
      setisCampaignRender(response.data);
    } catch (err) {
      setisCampaignRender(err);
    }
  };

  return [isCampaignRender, GetCampaignRender];
};