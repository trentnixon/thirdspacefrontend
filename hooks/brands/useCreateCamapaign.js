import { useState } from "react";
import { fetcher } from "../../lib/api";
const qs = require("qs");

export const useCreateCampaign = () => {
  const [Campaign, setCampaign] = useState(null);
  const [isComplete, setIsComplete] = useState(null);

  const CreateCampaign = async (OBJ) => {
    setIsComplete(false);
    try {
        ///api/campaigns
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/campaigns`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: OBJ }), 
        }
      );

      setCampaign(response);
      setIsComplete(true);
    } catch (err) {
        setCampaign(err);
      setIsComplete(true);
    }
  };

  return [Campaign, CreateCampaign, isComplete];
};
