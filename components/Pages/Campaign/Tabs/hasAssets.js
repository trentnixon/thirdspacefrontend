import { Center, Group, Image, SimpleGrid } from "@mantine/core";
import { BTN_LINK } from "../../../ui/btn";
import { UIPaperWrapper, UICopyWrapper } from "../../../ui/Containers";
import { H1, H2, P } from "../../../ui/type";
import { Thumbnail } from "@remotion/player";
import { ThumbTest } from "../../Video/Player/remotionThumb";
import {
  IconMovie,
  IconPhoto,
  IconMicrophone,
  IconSpeaker,
} from "@tabler/icons-react";
export const HasAssets = ({ Campaign }) => {
  return (
    <UICopyWrapper>
      <Group position="apart">
        <H2>Assets</H2>
        <BTN_LINK LABEL={"Create"} HREF={`/thirdspace/assets/create`} />
      </Group>
      {Campaign.video_assets.data.length === 0 ? (
        <NoAssets />
      ) : (
        <ShowAssets Assets={Campaign.video_assets.data} />
      )}
    </UICopyWrapper>
  );
};

const NoAssets = () => {
  return <UIPaperWrapper>No Assets assigned</UIPaperWrapper>;
};

const ShowAssets = ({ Assets }) => {
  console.log(Assets);

  const grouped = Assets.reduce((acc, obj) => {
    const key = obj.attributes.video_placeholder_type.data.attributes.Name;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

  const handleNothing = () => {};

  return (
    <>
      <GroupedData data={grouped} />
    </>
  );
};

const GroupedData = ({ data }) => {
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
                <Center>
                  <P>{item.attributes.Name}</P>
                </Center>
              </UIPaperWrapper>
            ))}
          </SimpleGrid>
        </div>
      ))}
    </>
  );
};

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
  console.log(IMAGE);
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
  console.log(AUDIO);
  return (
    <IconSpeaker
      style={{
        color: "#888",
        width: "64px",
        height: "64px",
      }}
    />
  );
};

/* <UIPaperWrapper>
        <Table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>View</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {Assets.map((v, i) => {
              return (
                <tr key={i}>
                  <td>
                    <P>
                      {v.attributes.video_placeholder_type.data.attributes.Name}
                    </P>
                  </td>
                  <td>
                    <P>{v.attributes.Name}</P>
                  </td>
                  <td>
                    VIEW
                  </td>
                  <td>
                  EDIT
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </UIPaperWrapper> */
