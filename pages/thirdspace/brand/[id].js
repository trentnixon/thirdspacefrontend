import { Group, Image } from "@mantine/core";
import { useEffect, useState } from "react";
import { CreateNewBrand } from "../../../components/Pages/Brand/createNewBrand";
import { IsBrandSelected } from "../../../components/Pages/Brand/isBrandSelected";
import { SelectBrandFromTable } from "../../../components/Pages/Brand/selectBrandTable";
import MembersShell from "../../../components/template/MembersShell";
import { BTN_FUNC, BTN_LINK } from "../../../components/ui/btn";
import { H1, P } from "../../../components/ui/type";
import { fetcher } from "../../../lib/api";
import { useSessionDetails } from "../../../lib/session";
const qs = require("qs");
const query = qs.stringify(
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
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

// GET STATICPATHS
export const getStaticPaths = async () => {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/brands?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );
  let Response = response.data;

  const path = Response.map((d, i) => {
    return {
      params: {
        id: d.id.toString(),
      },
    };
  });

  return {
    paths: path,
    fallback: false,
  };
};

const ViewBrand = (props) => {
  const { brand } = props;
  return (
    <MembersShell>
      <Group position="right" my={20}>
        <BTN_LINK LABEL={`Change Brand`} HREF={`/thirdspace/brand/`} />
      </Group>

      <Group position="apart">
        <H1>
          {brand.Name}
        </H1> 
        <Image
            width={50}
            radius={100}
            src={`${brand?.LOGO?.data?.attributes.url}`}
          />
      </Group>
      <IsBrandSelected brand={brand} />
    </MembersShell>
  );
};

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const id = params.id;
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/brands/${id}?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );
  let brand = response.data;

  return {
    props: {
      brand: brand.attributes,
    },
  };
}

export default ViewBrand;
