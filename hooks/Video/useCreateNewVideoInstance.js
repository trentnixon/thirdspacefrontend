import { useState } from "react";
import { fetcher } from "../../lib/api";
const qs = require("qs");

export const useCreateVideoInstance = () => {
    const [VideoInstance, setVideoInstance] = useState(null);
    const [isComplete, setIsComplete] = useState(null);
  
    const CreateVideoInstance = async (OBJ) => {
      setIsComplete(false);
      try {
        const response = await fetcher(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/videos`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: OBJ }), 
          }
        );
  
        setVideoInstance(response);
        setIsComplete(true);
      } catch (err) {
        setVideoInstance(err);
        setIsComplete(true);
      }
    };
  
    return [VideoInstance, CreateVideoInstance, isComplete];
  };