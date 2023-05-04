import { Badge, Box, Grid, Group, Table, useMantineTheme } from "@mantine/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BTN_FUNC } from "../../../ui/btn";
import { P } from "../../../ui/type";
// HOOKS
import { useGETCampaignVideos } from "../../../../hooks/useGetassets/useAssetsVideos";

// Import Placegholders
/* // Video
import { BackgroundVideo } from "../Placeholders/BackgroundVideo";

// Images
import { BackgroundMediaImage } from "../Placeholders/BackgroundMediaImage";
import { BrandLogo } from "../Placeholders/BrandLogo";
// Copy
import { Title } from "../Placeholders/Title";
import { StaticOffer } from "../Placeholders/Offer";
import { Prefix } from "../Placeholders/Prefix";
import { Suffix } from "../Placeholders/Suffix";
// Meta
import { SelectFPS } from "../Placeholders/FPS"; */

import { RemotionSequencePlayer } from "../Player/SequencePreview";
import {
  IconCircleCheck,
  IconPlus,
  IconQuestionCircle,
} from "@tabler/icons-react";
import { UIPaperWrapper } from "../../../ui/Containers";
/* const components = {
  BackgroundVideo,
  Title,
  BrandLogo,
  BackgroundMediaImage,
  StaticOffer,
  Prefix,
  Suffix,
}; */

// REFACTOR ALL OF THIS!!!!

export const SequenceDetails = (props) => {
  const { CreateModule, setCreateModule, handleAddSequence, video, VideoOBJ } =
    props;
  const theme = useMantineTheme();
  // HOOKS
  const [VideoAssets, GetVideoAssets, working] = useGETCampaignVideos();

  console.log(CreateModule);
  // USE STATE
  const [OBJ, setOBJ] = useState({
    component: CreateModule.attributes.ComponentName,
    componentID:CreateModule.id,
    Name: CreateModule.attributes.Name,
    Type:CreateModule.attributes.video_placeholder_type.data.attributes.Name,
    ID: generateRandomID(),
    DATA: {},
  });
 
  // USE EFFECT 
  useEffect(() => {
    GetVideoAssets(video.campaign.data.id);
  }, []);

  useEffect(() => {
    console.log(VideoAssets);
  }, [VideoAssets]);

  useEffect(() => {
    console.log(OBJ);

    console.log("isTrue", allValuesPresentAsKeys(OBJ));
  }, [OBJ]);

  // FUNCS
  function generateRandomID() {
    const randomNum = Math.random().toString().slice(2, 12);
    return randomNum;
  }

  function hasKey(obj, key) {
    return key in obj;
  }

  function allValuesPresentAsKeys(obj) {
    const ARR = [];
    CreateModule.attributes.video_placeholders.data.map((p, i) => {
      ARR.push(p.attributes.ComponentName);
    });

    for (let i = 0; i < ARR.length; i++) {
      if (!(ARR[i] in obj.DATA)) {
        return true;
      }
    }
    return false;
  }

  if (working !== false) {
    return <>WORKING</>;
  }
  if (VideoAssets === null) {
    return <>ERROR Fetching Assets</>;
  }

  return (
    <>
      <Grid>
        <Grid.Col span={8}>
          <Group position="apart">
            <IconPlus />
            <P Weight={900}>Sequence Creator</P>
            <Badge color={theme.colors.ui[1]} variant="filled" my={10}>
              Preview Sequence
            </Badge>
          </Group>
          <RemotionSequencePlayer SequenceOBJ={OBJ} />
          <Group position="right" mt={10}>
            <BTN_FUNC
              LABEL={`Save to Sequence`}
              isDisabled={allValuesPresentAsKeys(OBJ)}
              HANDLE={() => {
                handleAddSequence(OBJ);
              }}
            />
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <P align={"right"}> {CreateModule.attributes.Name}</P>
          <UIPaperWrapper>
            <Table>
              <thead>
                <tr>
                  <th>Asset</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {CreateModule.attributes.video_placeholders.data.map(
                  (PlaceHolder, i) => {
                    return (
                      <tr key={i}>
                        <td>{PlaceHolder.attributes.Name}</td>
                        <td>
                          {hasKey(
                            OBJ.DATA,
                            PlaceHolder.attributes.ComponentName
                          ) ? (
                            <IconCircleCheck color={"green"} />
                          ) : (
                            <IconQuestionCircle color={"yellow"} />
                          )}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </Table>
          </UIPaperWrapper>
          <Box
            mt={10}
            style={{
              width: "100%",
            }}
          >
            <Group position="right">
              <BTN_FUNC
                LABEL={`Back to List`}
                HANDLE={() => {
                  setCreateModule(false);
                }}
              />
            </Group>
          </Box>
        </Grid.Col>
      </Grid>






      <Grid>
        <Grid.Col span={12}>
         {/*  <SelectFPS setOBJ={setOBJ} OBJ={OBJ} />
 */}
          {CreateModule.attributes.video_placeholders.data.map(
            (PlaceHolder, i) => {
              return (
                <div key={i}>
                  {React.createElement(
                    components[PlaceHolder.attributes.ComponentName],
                    {
                      setOBJ: setOBJ,
                      OBJ: OBJ,
                      VideoAssets: VideoAssets,
                      PlaceHolder: PlaceHolder,
                    }
                  )}
                </div>
              );
            }
          )}
        </Grid.Col>
      </Grid>
    </>
  );
};
