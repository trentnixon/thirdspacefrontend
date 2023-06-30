import React, { useEffect } from "react";
// Packages
import { Tabs } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
// Import Placeholders
// Video
import { BackgroundVideo } from "../Placeholders/type/video/BackgroundVideo";
// Images
import { BackgroundMediaImage } from "../Placeholders/type/images/BackgroundMediaImage";
import { BrandLogo } from "../Placeholders/type/images/BrandLogo";
import { IMGBefore } from "../Placeholders/type/images/IMGBefore";
import { IMGAfter } from "../Placeholders/type/images/IMGAfter";
// Copy
import { Title } from "../Placeholders/type/copy/Title";
import {LongCopy} from '../Placeholders/type/copy/LongCopy'
import { StaticOffer } from "../Placeholders/type/copy/Offer";
import { Prefix } from "../Placeholders/type/copy/Prefix";
import { Suffix } from "../Placeholders/type/copy/Suffix";
// Audio
import { BackgroundAudio } from "../Placeholders/type/audio/BackgroundAudio";
// Meta
import { useGETCampaignVideos } from "../../../../../hooks/useGetassets/useAssetsVideos";

const components = {
  BackgroundVideo, 
  Title,
  LongCopy,
  BrandLogo,
  BackgroundMediaImage,
  StaticOffer,
  Prefix,
  Suffix,
  IMGBefore,
  IMGAfter,
  BackgroundAudio 
};
export const DisplaySequenceComponents = ({
  VideoModule,
  CreateSequenceOBJ,
  setCreateSequenceOBJ,
  Video,
  dataset,
}) => {
  function groupByVideoPlaceholderTypeName(arr) {
    return arr.reduce((accumulator, currentObj) => {
      const typeName =
        currentObj.attributes.video_placeholder_type.data.attributes.Name;

      if (!accumulator[typeName]) {
        accumulator[typeName] = [];
      }

      accumulator[typeName].push(currentObj);
      return accumulator;
    }, {});
  }

  
  const handleInputChange = (newField) => {
    //console.log(newField)

    if (!CreateSequenceOBJ.DATA.fields) {
      CreateSequenceOBJ.DATA.fields = [];
    }
    const fieldIndex = CreateSequenceOBJ.DATA.fields.findIndex(
      (field) => field.name === newField.name
    );

    let newFields = [...CreateSequenceOBJ.DATA.fields];
    if (fieldIndex >= 0) {
      newFields[fieldIndex] = newField;
    } else {
      newFields.push(newField);
    }

    let MODULEDATA = {
      ...CreateSequenceOBJ,
      DATA: {
        ...CreateSequenceOBJ.DATA,
        fields: newFields,
      },
    };

    //console.log("MODULEDATA", MODULEDATA);

    setCreateSequenceOBJ(MODULEDATA);
  };

  const groupedByPlaceholderTypeName = groupByVideoPlaceholderTypeName(
    VideoModule.video_placeholders.data
  );
  // HOOKS
  const [VideoAssets, GetVideoAssets, working] = useGETCampaignVideos();
  // USE EFFECT

  useEffect(() => {
    GetVideoAssets(Video.campaign.data.id);
  }, []);

  useEffect(() => {
    //console.log(VideoAssets);
  }, [VideoAssets]);
  if (working !== false) {
    return <>WORKING</>;
  }
  if (VideoAssets === null) {
    return <>ERROR Fetching Assets</>;
  }
  return (
    <>
      <Tabs
        variant="pills"
        defaultValue={Object.keys(groupedByPlaceholderTypeName)[0]}
      >
        <Tabs.List position="center" grow>
          {Object.keys(groupedByPlaceholderTypeName).map((key, i) => {
            return (
              <Tabs.Tab
                key={key}
                value={key}
                icon={<IconPhoto size="0.8rem" />}
                sx={(theme) => ({
                  color: theme.colors.ui[1],
                  "&[data-active]": {
                    backgroundColor: theme.colors.ui[0],
                  },
                })}
              >
                {key}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>

        {Object.keys(groupedByPlaceholderTypeName).map((key, i) => {
          return (
            <Tabs.Panel value={key} pt="xs" key={key}>
              {groupedByPlaceholderTypeName[key].map((PlaceHolder, i) => {
                //console.log(PlaceHolder);
                return (
                  <div key={i}>
                    {React.createElement(
                      components[PlaceHolder.attributes.ComponentName],
                      {
                        handleInputChange: handleInputChange,
                        CreateSequenceOBJ: CreateSequenceOBJ,
                        VideoAssets: VideoAssets,
                        PlaceHolder: PlaceHolder,
                        dataset: dataset,
                      }
                    )}
                  </div>
                );
              })}
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </>
  );
};
