import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Group } from "@mantine/core";
import MembersShell from "../../../components/template/MembersShell";
import { PREBUILT_BACKBTN } from "../../../components/ui/btn";
import { H1, H2, P } from "../../../components/ui/type";

import { fetcher } from "../../../lib/api";
import { UIPaperWrapper } from "../../../components/ui/Containers";
import {
  NoAssets,
  ShowAssets,
} from "../../../components/Common/DisplayAssignedAssets"; 

import { useAssignBrandAssets } from "../../../hooks/campaigns/useAssignBrandAsset";
const qs = require("qs");

// Helper function to extract IDs from an array of objects
const extractIds = (obj) => {
  return obj.map((item) => item.id);
};

const CreateNewDataset = ({ campaign, campaignID }) => {
  const router = useRouter();

  // State to manage the array of assigned asset IDs
  const [AssignedARR, setAssignedARR] = useState(
    extractIds(campaign.video_assets.data)
  );

  // Custom hook for managing brand assets assignment
  const [BrandAssets, AssignBrandAssets, isComplete] = useAssignBrandAssets();

  // Callback function to handle the assignment and removal of asset IDs
  const StoreAssetID = useCallback(
    (OBJ) => {
      if (OBJ.event) {
        // Add OBJ.id to AssignedARR if it doesn't exist
        if (!AssignedARR.includes(OBJ.id)) {
          setAssignedARR((prevState) => [...prevState, OBJ.id]);
        }
      } else {
        // Remove OBJ.id from AssignedARR if it exists
        setAssignedARR((prevState) =>
          prevState.filter((item) => item !== OBJ.id)
        );
      }
    },
    []
  );

  // useEffect to update brand assets whenever the AssignedARR changes
  useEffect(() => {
    AssignBrandAssets({ video_assets: AssignedARR }, campaignID);
  }, [AssignedARR, campaignID]);

  return (
    <MembersShell>
      <Group position="right">
        <PREBUILT_BACKBTN />
      </Group>
      <H1>{campaign.Name}</H1>
      <H2>Upload Campaign Assets</H2>
      <UIPaperWrapper>
        {!campaign ? (
          <NoCampaign />
        ) : (
          <Assetuploader ASSIGNTO={router.query.id} />
        )}
      </UIPaperWrapper>

      <H2>Assign from Brand Assets</H2>
      <UIPaperWrapper>
        {campaign.brand.data.attributes.video_assets.data.length === 0 ? (
          <NoAssets />
        ) : (
          <ShowAssets
            Assets={campaign.brand.data.attributes.video_assets.data}
            assign={campaignID}
            StoreAssetID={StoreAssetID}
          />
        )}
      </UIPaperWrapper>
    </MembersShell>
  );
};

export default CreateNewDataset;

const Assetuploader = () => {
  return <>The Asset Uploader is currently disabled in POC</>;
};

const NoCampaign = () => {
  return <P>No Campaign ID Found</P>;
};

export async function getServerSideProps(ctx) {
  const Fetchquery = qs.stringify(
    {
      populate: [
        "brand",
        "brand.video_assets",
        "brand.video_assets.Value",
        "brand.video_assets.video_placeholder_type",
        "brand.video_assets.campaigns",
        "video_assets",
        "video_assets.Value",
        "video_assets.video_placeholder_type",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { query } = ctx;
  const id = query.id;

//console.log("query ", id);

  if (!id) {
    return {
      props: {
        campaign: null,
        campaignID:null
      },
    };
  }

  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/campaigns/${id}?${Fetchquery}`,
    {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );

  let campaign = response.data;

  return {
    props: {
      campaign: campaign?.attributes,
      campaignID:campaign.id
    },
  };
}
