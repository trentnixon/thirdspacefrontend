import { useState } from "react";
import { fetcher } from "../../lib/api";


export const useUpdateVideo = () => {
  const [Video, setVideo] = useState(null);
  const [working, setWorking] = useState(null);

  const UpdateVideo = async (obj, _ID) => {
    console.log(obj, _ID);
    setWorking(true);
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/videos/${_ID}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: { OBJ: obj } }),
        }
      );

      setVideo(response);
      setWorking(false);
      return true; // Add this line
    } catch (err) {
      setVideo(err);
      setWorking(false);
      return false; // Add this line
    }
  };

  return [Video, UpdateVideo, working];
};