import React, { useEffect } from "react";
import { useGetCampaignRender } from "../../../../hooks/Video/useCreateCampaignRender";
import { H1, P } from "../../../ui/type";
import { UIPaperWrapper } from "../../../ui/Containers";
import { Table, Progress, Center } from "@mantine/core";
import { BTN_FUNC } from "../../../ui/btn";
import MembersShell from "../../../template/MembersShell";

export const CampaignIsRendering = (props) => {
  const { CampaignRender,VideoTitle } = props;

  const [isCampaignRender, GetCampaignRender] = useGetCampaignRender();

  // Function to fetch the updated render status
  const fetchUpdatedRenderStatus = async () => {
    //console.log("fetchUpdatedRenderStatus");
    await GetCampaignRender(CampaignRender.id);
  };

  useEffect(() => {
    fetchUpdatedRenderStatus();
  }, []);

  // Function to render the list of renders and their states
  const renderRendersList = () => {
    return isCampaignRender.attributes.renders.data.map((render, index) => (
      <tr key={index}>
        <td>
          <P>{render.attributes.Name}</P>
        </td>

        <td>
          <P textAlign="center" size={`xs`}>
            {render.attributes.isRendering
              ? "Rendering"
              : render.attributes.isComplete
              ? ""
              : "Waiting"}
          </P>
          {render.attributes.isComplete ? (
            <Center>
              <RenderCompCompleted URL={render.attributes.URL} />
            </Center>
          ) : (
            <Progress
              color="yellow"
              radius="xl"
              size="xl"
              mt={0}
              value={render.attributes.Progress}
              label={`${parseInt(render.attributes.Progress).toFixed(0)}%`}
              striped
              animate
            />
          )}
        </td>
      </tr>
    ));
  };

  useEffect(() => {
  //console.log(isCampaignRender?.attributes?.renders?.data);
    let timeoutId;
    if (isCampaignRender?.attributes?.isRendering) {
      timeoutId = setTimeout(() => {
        fetchUpdatedRenderStatus();
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isCampaignRender]);

  return (
    
    <MembersShell>
      <H1>Render Campaign</H1>
      <UIPaperWrapper>
        <P>
          Please wait while we render your campaign. You can view completed
          renders once they are finished.
        </P>
        <P>All files will be available once rendering is complete.</P>
      </UIPaperWrapper>
      <UIPaperWrapper>
        <Table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Status</th>
              {/*  <th>Progress</th> */}
            </tr>
          </thead>
          <tbody>
            {isCampaignRender?.attributes?.isRendering !== undefined
              ? renderRendersList()
              : "Waiting for Render info"}
          </tbody>
        </Table>
      </UIPaperWrapper>
      <BTN_FUNC
      LABEL={`To Video Details`}
      HANDLE={() => {
        OpenVideoInWIndow(URL);
      }}
    />
    </MembersShell>
  );
};

export const RenderCompCompleted = (props) => {
  const { URL } = props;
  const OpenVideoInWIndow = (url) => {
    window.open(url);
  };
  return (
    <BTN_FUNC
      LABEL={`Download`}
      HANDLE={() => {
        OpenVideoInWIndow(URL);
      }}
    />
  );
};
