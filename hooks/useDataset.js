//
import { useState } from "react";
import { fetcher } from "../lib/api";

/*
        POST
        create dataset
    /api/datasets
        Create data row
    /api/data-set-rows
        Create Data Item
    /api/data-set-items

*/

const useCreateDataItems = () => {
    const createDataItems = async (row, id) => {
      const promises = Object.keys(row).map((item) =>
        fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/data-set-items`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              Key: item,
              Value: row[item],
              data_set_row: [id],
            },
          }),
        })
      );
  
      return Promise.all(promises);
    };
  
    return createDataItems;
  };
  
const useCreateDataRows = () => {
  const createDataRows = async (obj, id, Name) => {
    await Promise.all(
      obj.map(async (row, i) => {
      //console.log(row, id);
        const response = await fetcher(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/data-set-rows`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                Name: `${Name}_${id}_row_${i}`,
                dataset: [id],
              },
            }),
          }
        );
        await createDataItems(row, response.data.id);
        return response;
      })
    );
  };

  const createDataItems = useCreateDataItems();

  return createDataRows;
};

export const useCreateDataset = () => {
  const [dataset, setDataset] = useState(null);
  const [working, setWorking] = useState(null);
  const createDataRows = useCreateDataRows();

  const createDataset = async (obj, campaign, Name) => {
    setWorking(true)
    try {
      const response = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/datasets`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: { Name: Name, campaigns: [campaign] } }),
        }
      );
      await createDataRows(obj, response.data.id, Name);
      setDataset(response);
      setWorking(false)
    } catch (err) {
      setDataset(err);
      setWorking(false)
    }
  };

  return [dataset, createDataset,working];
};
