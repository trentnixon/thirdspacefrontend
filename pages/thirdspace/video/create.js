import { useState, useEffect } from "react";
import {
  Button,
  Group,
  Paper,
  Select,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useRouter } from "next/router";
import MembersShell from "../../../components/template/MembersShell";
import { BTN_LINK } from "../../../components/ui/btn";
import { H1, H2, H3, P } from "../../../components/ui/type";
import { fetcher } from "../../../lib/api";
import { UIPaperWrapper } from "../../../components/ui/Containers";

import { HexColorInput, HexColorPicker } from "react-colorful";
import { useCreateVideoInstance } from "../../../hooks/Video/useCreateNewVideoInstance";
import {
  VideoColorPickerGroup,
  VideoSettings_ColorPicker,
} from "../../../components/Pages/Video/components/ColorPicker";
import { SelectVideoFont } from "../../../components/Pages/Video/components/SelectVideoFont";
const qs = require("qs");
const Strapiquery = qs.stringify(
  {
    populate: [
      "brand",
      "videos",
      "videos.campaign",
      "videos.dataset",
      "videos.renders",
      "datasets",
      "datasets.data_set_rows",
      "datasets.data_set_rows.data_set_items",
      "video_assets",
      "video_assets.Value",
      "video_assets.video_placeholder_type",
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

const CreateNewVideo = ({ campaign, fonts }) => {
  const router = useRouter();
  const [VideoInstance, CreateVideoInstance, isComplete] =
    useCreateVideoInstance();
  //useCreateVideoInstance

  useEffect(() => {
    //console.log(VideoInstance);
  }, [VideoInstance]);
  if (isComplete) return <MembersShell>Video Instance Created </MembersShell>;
  if (!isComplete === false) return <MembersShell>CREATING </MembersShell>;
  return (
    <MembersShell>
      <Group position="right">
        <BTN_LINK HREF={`/thirdspace/`} LABEL={`Back`} />
      </Group>
      <H1>Create a Video {router.query.id}</H1>
      {router.query.id !== undefined ? (
        <CreateNewVideoForm
          campaign={campaign}
          fonts={fonts}
          CreateVideoInstance={CreateVideoInstance}
        />
      ) : (
        <NoCampaign />
      )}
    </MembersShell>
  );
};

export default CreateNewVideo;

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const id = query.id;
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/campaigns/${id}?${Strapiquery}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );

  const fontsRes = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/fonts`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );

  let campaign = response.data;
  let fonts = fontsRes.data;
  return {
    props: {
      campaign: campaign?.attributes,
      fonts: fonts,
    },
  };
}

const NoCampaign = () => {
  return (
    <UIPaperWrapper>
      <P>No Campaign ID Found</P>
    </UIPaperWrapper>
  );
};

const CreateNewVideoForm = ({ campaign, fonts, CreateVideoInstance }) => {
  const router = useRouter();

  //console.log(fonts);

  const [OBJ, setOBJ] = useState({
    Settings: {
      Theme: {
        Primary: "#2C2E43",
        Secondary: "#A8A8A8",
        BackgroundColor: "#F4F4F4",
      },
      Font: {
        fontFamily: "Montserrat",
      },
    },
    Series: [],
  });

  const [formValues, setFormValues] = useState({
    Name: "",
    dataset: [],
    campaign: [parseInt(router.query.id)],
    OBJ: OBJ,
  });
  // List of datasets and campaigns for demonstration
  // Replace these with real data

  const CreateDatasetARR = (DATA) => {
    const ARR = [];
    DATA.map((d, i) => {
      ARR.push({ value: d.id, label: d.attributes.Name });
    });
    return ARR;
  };
  const CreateFontARR = (DATA) => {
    const ARR = [];
    DATA.map((d, i) => {
      ARR.push({ value: d.attributes.Name, label: d.attributes.Name });
    });
    return ARR;
  };

  // select data
  const datasets = CreateDatasetARR(campaign.datasets.data);
  const fontData = CreateFontARR(fonts);
  const handleInputChange = (event) => {
    //console.log();
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleSelectChange = (event) => {
    setFormValues({
      ...formValues,
      dataset: [event],
    });
  };
  const handleFontChange = (event) => {
    setOBJ((prevOBJ) => ({
      ...prevOBJ,
      Settings: {
        ...prevOBJ.Settings,
        Font: {
          ...prevOBJ.Settings.Font,
          fontFamily: event,
        },
      },
    }));
  };

  const handleColorChange = (event) => {
    setOBJ((prevOBJ) => ({
      ...prevOBJ,
      Settings: {
        ...prevOBJ.Settings,
        Theme: {
          ...prevOBJ.Settings.Theme,
          [event.Property]: event.Color,
        },
      },
    }));
  };

  useEffect(() => {
    //console.log("OBJ", OBJ);
    setFormValues((prevValues) => ({
      ...prevValues,
      OBJ: OBJ,
    }));
  }, [OBJ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    CreateVideoInstance(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <H2>About Video</H2>
      <UIPaperWrapper>
        <TextInput
          label="Video Name"
          description="Please use a unique naming. This name will be used to identify the renders later"
          required
          name="Name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <Select
          data={datasets}
          label="Select Dataset"
          description="Which dataset would you like the video to use?"
          required
          name="dataset"
          value={formValues.dataset[0]}
          onChange={handleSelectChange}
        />
      </UIPaperWrapper>
      <H2>Create Video Theme</H2>
      <UIPaperWrapper>
        <Paper
          shadow="xl"
          my={10}
          p={`lg`}
          style={{
            backgroundColor: OBJ.Settings.Theme.BackgroundColor,
          }}
        >
          <Title
            align="center"
            transform="uppercase"
            order={4}
            style={{
              color: OBJ.Settings.Theme.Primary,
            }}
          >
            This is the Primary Header Color
          </Title>

          <Title
            align="center"
            transform="uppercase"
            order={4}
            style={{
              color: OBJ.Settings.Theme.Secondary,
            }}
          >
            This is the Secondary Header Color
          </Title>
        </Paper>
        <VideoColorPickerGroup
          handleColorChange={handleColorChange}
          OBJ={OBJ}
        />

        <SelectVideoFont
          fonts={fonts}
          OBJ={OBJ}
          handleFontChange={handleFontChange}
        />

      </UIPaperWrapper>
      <Button type="submit">Create</Button>
    </form>
  );
};
