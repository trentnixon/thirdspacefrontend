import { useRouter } from "next/router";
import { Grid, Space, Stack, Table, useMantineTheme } from "@mantine/core";
import {
  IconClipboardList,
  IconListCheck,
  IconMovie,
  IconPhoto,
} from "@tabler/icons-react";
import { BTN_LINK, NAV_LINK } from "../../ui/btn";
import { UICopyWrapper, UIPaperWrapper } from "../../ui/Containers";
import { H1, H2, H3, H4, P } from "../../ui/type";
import { DataTableHeader } from "../../ui/table";
import { NoAssets, ShowAssets } from "../../Common/DisplayAssignedAssets";

export const IsBrandSelected = ({ brand }) => {
  //console.log(brand);
  const theme = useMantineTheme();
  const router = useRouter();
  const columns = [
    {
      key: "name",
      label: "Campaigns",
      icon: <IconClipboardList size={20} color={theme.colors.ui[0]} />,
    },
    {
      key: "dataset",
      label: "Dataset",
      icon: <IconListCheck size={20} color={theme.colors.ui[0]} />,
      alignItems: "center",
    },
    {
      key: "videos",
      label: "Videos",
      icon: <IconMovie size={20} color={theme.colors.ui[0]} />,
      alignItems: "center",
    },
    {
      key: "assets",
      label: "Assets",
      icon: <IconPhoto size={20} color={theme.colors.ui[0]} />,
      alignItems: "center",
    },
    {
      key: "status",
      label: "Status",
      icon: <IconListCheck size={20} color={theme.colors.ui[0]} />,
      alignItems: "center",
    },
    { key: "actions", label: "", icon: null, alignItems: null },
  ];
  return (
    <>
      <Grid>
        <Grid.Col span={2}>
          <UIPaperWrapper>
            <H4>Options </H4>
            <Stack justify="flex-start" align="left">
              <NAV_LINK
                LABEL={"Edit Brand"}
                HREF={`/thirdspace/brand/${router.query.id}/edit`}
              />
              <NAV_LINK
                LABEL={"Brand Settings"}
                HREF={`/thirdspace/brand/${router.query.id}/settings`}
              />
              <NAV_LINK
                LABEL={"Brand Assets"}
                HREF={`/thirdspace/brand/${router.query.id}/assets`}
              />
              <NAV_LINK
                LABEL={"New Campaign"}
                HREF={`/thirdspace/brand/${router.query.id}/newCampaign`}
              />            
            </Stack>
          </UIPaperWrapper>
        </Grid.Col>
        <Grid.Col span={8}>
          <H2>Campaigns</H2>
          <UIPaperWrapper>
            <Table>
              <DataTableHeader columns={columns} />
              <tbody>
                {brand.campaigns?.data.map((c, i) => {
                  return (
                    <tr key={i}>
                      <td
                        style={{
                          color: theme.colors.ui[0],
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <P Weight={600}>{c.attributes.Name}</P>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {c.attributes.datasets.data.length}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {c.attributes.videos.data.length}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {c.attributes.video_assets.data.length}
                      </td>
                      <td style={{ textAlign: "center" }}>active</td>
                      <td style={{ textAlign: "center" }}>
                        <BTN_LINK
                          LABEL={`View`}
                          HREF={`/thirdspace/campaign/${c.id}`}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </UIPaperWrapper>

          {brand.video_assets.data.length === 0 ? (
            <NoAssets />
          ) : (
            <ShowAssets Assets={brand.video_assets.data} />
          )}
        </Grid.Col>
      </Grid>
      <Space h={20} />

      {/* <Grid>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={8}>
          <H1>Campaigns</H1>
          <UIPaperWrapper>
            <Table>
              <DataTableHeader columns={columns} />
              <tbody>
                {brand.campaigns?.data.map((c, i) => {
                  return (
                    <tr key={i}>
                      <td
                        style={{
                          color: theme.colors.ui[0],
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <P Weight={600}>{c.attributes.Name}</P>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {c.attributes.datasets.data.length}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {c.attributes.videos.data.length}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {c.attributes.video_assets.data.length}
                      </td>
                      <td style={{ textAlign: "center" }}>active</td>
                      <td style={{ textAlign: "center" }}>
                        <BTN_LINK
                          LABEL={`View`}
                          HREF={`/thirdspace/campaign/${c.id}`}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </UIPaperWrapper>

          <H1>Brand Assets</H1>
          {brand.video_assets.data.length === 0 ? (
            <NoAssets />
          ) : (
            <ShowAssets Assets={brand.video_assets.data} />
          )}
        </Grid.Col>
      </Grid> */}
    </>
  );
};
