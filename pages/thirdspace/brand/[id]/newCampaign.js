import { Group, Input, Textarea } from "@mantine/core";
import { useRouter } from "next/router";
import MembersShell from "../../../../components/template/MembersShell";
import {
  BTN_FUNC,
  BTN_LINK,
  PREBUILT_BACKBTN,
} from "../../../../components/ui/btn";
import { H1, H4, P } from "../../../../components/ui/type";

import { fetcher } from "../../../../lib/api";
import { useCreateCampaign } from "../../../../hooks/brands/useCreateCamapaign";
import { UIPaperWrapper } from "../../../../components/ui/Containers";
import { useState } from "react";
import { useEffect } from "react";
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

const CreateNewBrand = (props) => {
  const { brand } = props;
  const router = useRouter();

  // Maintain state for the campaign name and description
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [Campaign, CreateCampaign, isComplete] = useCreateCampaign();

  const handleSubmit = async () => {
    // Clear error message
    setError("");

    // Validate the form data before submitting
    if (campaignName.trim() === "" || campaignDescription.trim() === "") {
      setError("Campaign name and description are required.");
      return;
    }

    setLoading(true);
    await CreateCampaign({
      Name: campaignName,
      Description: campaignDescription,
      brand: [router.query.id],
    });
  };

  useEffect(() => {
    if (isComplete && !error) {
      //console.log(Campaign.data.id)
      router.push(`/thirdspace/campaign/${Campaign.data.id}`);
    } else {
      setLoading(false);
    }
  }, [isComplete, error, Campaign, router]);

  return (
    <MembersShell>
      <Group position="right">
        <PREBUILT_BACKBTN />
      </Group>
      <H1>Create a Campaign</H1>
     
      <P>
        This feature will create a new campaign for {brand.Name}{" "}
        {router.query.id}
      </P>
      {error && <UIPaperWrapper>{error}</UIPaperWrapper>}
      <UIPaperWrapper>
        <H4>Create Campaign</H4>
        <Input.Wrapper id={"new"} label="Campaign Name" required mx="auto">
          <Input
            id={"new"}
            label="Campaign Name"
            placeholder="Campaign Name"
            required
            mx="auto"
            value={campaignName}
            onChange={(event) => setCampaignName(event.target.value)}
          />
        </Input.Wrapper>

        <Textarea
          placeholder="About this Campaign "
          label="Internal Use only"
          withAsterisk
          minRows={10}
          maxRows={10}
          value={campaignDescription}
          onChange={(event) => setCampaignDescription(event.target.value)}
        />

        

        <BTN_FUNC
          LABEL={loading ? "Creating..." : "Create"}
          HANDLE={handleSubmit}
          disabled={loading}
        />
      </UIPaperWrapper>
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
export default CreateNewBrand;
