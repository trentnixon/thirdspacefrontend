import { Center, Group, Image, SimpleGrid, Stack, Switch } from "@mantine/core";
import { BTN_LINK } from "../ui/btn";
import { UIPaperWrapper, UICopyWrapper } from "../ui/Containers";
import { H1, H2, P } from "../ui/type";
import { Thumbnail } from "@remotion/player";
import { ThumbTest } from "../Pages/Video/Player/remotionThumb";
import {
  IconMovie,
  IconPhoto,
  IconMicrophone,
  IconSpeakerphone,
} from "@tabler/icons-react";
import { useState } from "react";
import { useEffect } from "react";

export const NoAssets = () => {
  return <UIPaperWrapper>No Assets assigned</UIPaperWrapper>;
};

export const ShowAssets = ({
  Assets,
  assign = false,
  StoreAssetID = () => {},
}) => {
  const grouped = Assets.reduce((acc, obj) => {
    const key = obj.attributes.video_placeholder_type.data.attributes.Name;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

  return (
    <>
      <GroupedData data={grouped} assign={assign} StoreAssetID={StoreAssetID} />
    </>
  );
};

const GroupedData = ({ data, assign, StoreAssetID }) => {
  return (
    <>
      {Object.entries(data).map(([key, items]) => (
        <div key={key}>
          <H2>{key}</H2>
          <SimpleGrid cols={4}>
            {items.map((item, index) => (
              <UIPaperWrapper key={index}>
                <Center>
                  {item.attributes.video_placeholder_type.data.attributes
                    .Name === "Video" ? (
                    <IconMovie size={20} />
                  ) : item.attributes.video_placeholder_type.data.attributes
                      .Name === "Audio" ? (
                    <IconMicrophone size={20} />
                  ) : (
                    <IconPhoto size={20} />
                  )}
                </Center>

                <Center>
                  {key === "Video" ? (
                    <VideoThumb VIDEO={item} />
                  ) : key === "Image" ? (
                    <ImageThumb IMAGE={item} />
                  ) : key === "Audio" ? (
                    <AudioThumb AUDIO={item} />
                  ) : null}
                </Center>

                <Stack>
                  <Center>
                    <P>{item.attributes.Name}</P>
                  </Center>
                  <Center>
                    {assign ? (
                      <SelectAsset
                        StoreAssetID={StoreAssetID}
                        hasCampaigns={item.attributes.campaigns.data}
                        id={item.id}
                        assign={assign}
                      />
                    ) : (
                      false
                    )}
                  </Center>
                </Stack>
              </UIPaperWrapper>
            ))}
          </SimpleGrid>
        </div>
      ))}
    </>
  );
};

function SelectAsset({ StoreAssetID, id, assign, hasCampaigns }) {
  const idExists = (arr, targetId) => {
    return arr.some((obj) => obj.id === targetId);
  };

  const [isChecked, setIsChecked] = useState(idExists(hasCampaigns, assign));

  const CheckID = (event) => {
    StoreAssetID({
      event,
      id,
    });

    setIsChecked(!isChecked);
  };

  return (
    <Switch
      onChange={(event) => {
        CheckID(event.currentTarget.checked);
      }}
      checked={isChecked}
    />
  );
}

const VideoThumb = ({ VIDEO }) => {
  return (
    <Thumbnail
      component={ThumbTest}
      compositionWidth={320}
      compositionHeight={160}
      frameToDisplay={30}
      durationInFrames={30}
      fps={30}
      inputProps={{
        VIDEO: VIDEO.attributes.Value.data.attributes.url,
      }}
    />
  );
};

const ImageThumb = ({ IMAGE }) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      src={`${IMAGE.attributes.Value.data.attributes.url}`}
      height={120}
      width={120}
      fit="contain"
    />
  );
};

const AudioThumb = ({ AUDIO }) => {
  return (
    <IconSpeakerphone
      style={{
        color: "#888",
        width: "64px",
        height: "64px",
      }}
    />
  );
};
