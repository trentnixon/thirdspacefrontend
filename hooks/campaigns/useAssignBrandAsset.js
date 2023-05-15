import { useState } from "react";
import { fetcher } from "../../lib/api";
const qs = require("qs");


export const useAssignBrandAssets = () => {
    const [BrandAssets, setBrandAssets] = useState(null);
    const [isComplete, setIsComplete] = useState(null);
  
    const AssignBrandAssets = async (OBJ, ID) => {
      setIsComplete(false);
      try {
        const response = await fetcher(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/campaigns/${ID}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: OBJ }), 
          }
        );
  
        setBrandAssets(response);
        setIsComplete(true);
      } catch (err) {
        setBrandAssets(err);
        setIsComplete(true);
      }
    };
  
    return [BrandAssets, AssignBrandAssets, isComplete];
  };