import { Grid, Group, Stack, Switch, Table, Accordion } from "@mantine/core";
import MembersShell from "../../../template/MembersShell";
import { H1, H2, H3, H4, P } from "../../../ui/type";
import { BTN_FUNC, BTN_ICON_FUNC } from "../../../ui/btn";
import { UIPaperWrapper } from "../../../ui/Containers";
import { ListPreviousRenders } from "../createComps/listPreviousRenders";
import { IconEye } from "@tabler/icons-react";

export const VideoStateComplete = (props) => {
  const { video } = props;
  console.log(video);
  return (
    <MembersShell>
      <H1>Video Deployment</H1>
      <H2>Campaign : {video.Name}</H2>
      <Grid mt={15}>
        <Grid.Col
          span={4}
          sx={(theme) => ({
            backgroundColor: theme.colors.background,
          })}
        >
          <H3>Video Comps</H3>
          <P size={`sm`}>Your video comps created during campaign development</P>
          <ListPreviousRenders
            renderedComps={video.renders.data}
            isComplete={true}
          />

          <H3>Settings</H3>
          <Stack>
            <Switch label="Live" checked={true} />
            <Switch label="Cusomer Facing" checked={true} />
            <Switch label="Complete" checked={true} />
            <BTN_FUNC HANDLE={() => {}} LABEL={`Delete`} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={8}>
          <H3>Orders</H3>

          <Table>
           
            <tbody>
              {video.campaign_renders.data.map((Campaign, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <Group position="apart">
                        <H4>
                          {Campaign.attributes.Name} (
                          {Campaign.attributes.renders.data.length})
                        </H4>
                        [Download Full Campaign]
                      </Group>

                      <Accordion>
                        <Accordion.Item value="Items">
                          <UIPaperWrapper p={0}>
                            <Accordion.Control>Order Renders</Accordion.Control>

                            <Accordion.Panel m={0} p={0}>
                              <Table m={0}>
                                <thead>
                                  <tr>
                                    <th>Render</th>
                                    <th>View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Campaign.attributes.renders.data.map(
                                    (render, ii) => {
                                      return (
                                        <tr key={i}>
                                          <td>{render.attributes.Name}</td>
                                          <td>
                                            {
                                              <ViewRender
                                                URL={render.attributes.URL}
                                              />
                                            }
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )}
                                </tbody>
                              </Table>
                            </Accordion.Panel>
                          </UIPaperWrapper>
                        </Accordion.Item>
                      </Accordion>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Grid.Col>
      </Grid>
    </MembersShell>
  );
};

export const ViewRender = (props) => {
  const { URL } = props;
  const OpenVideoInWIndow = (url) => {
    window.open(url);
  };
  return (
    <BTN_ICON_FUNC
      ICON={<IconEye />}
      HANDLE={() => {
        OpenVideoInWIndow(URL);
      }}
    />
  );
};
