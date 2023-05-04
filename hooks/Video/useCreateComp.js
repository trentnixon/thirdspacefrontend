import { useState } from "react";
import { fetcher } from "../../lib/api";
const qs = require("qs");

export const useCreateComp = () => {
  const [dataset, setDataset] = useState(null);
  const [isComplete, setIsComplete] = useState(null);

  const CreateComp = async (OBJ) => {
    setIsComplete(false);
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/video-comps`,
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

  return [dataset, CreateComp, isComplete];
};

export const useFetchRenderingComp = () => {
  const [CompStatus, setCompStatus] = useState(null);
  const [isRenderComplete, setisRenderComplete] = useState(null);
  const FetchRender = async (ID) => {
    setisRenderComplete(false);
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/video-comps/${ID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setCompStatus(response.data.attributes);
      setisRenderComplete(true);
    } catch (err) {
      setCompStatus(err);
      setisRenderComplete(true);
    }
  };

  return [CompStatus, FetchRender, isRenderComplete];
};

export const useFetchCompsRelatedToVideo = () => {
  const [RelatedStatus, setRelatedStatus] = useState(null);

  const FetchRelated = async () => {
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/video-comps/`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      setRelatedStatus(response.data);
    } catch (err) {
      setRelatedStatus(err);
    }
  };

  return [RelatedStatus, FetchRelated];
};
