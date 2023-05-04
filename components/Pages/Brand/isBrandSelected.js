import { Grid, Space, Table, useMantineTheme } from "@mantine/core";
import {
  IconClipboardList,
  IconListCheck,
  IconMovie,
  IconPhoto,
} from "@tabler/icons-react";
import { BTN_LINK } from "../../ui/btn";
import { UICopyWrapper, UIPaperWrapper } from "../../ui/Containers";
import { H1, P } from "../../ui/type";
import { DataTableHeader } from "../../ui/table";

export const IsBrandSelected = ({ brand }) => {
  console.log(brand);
  const theme = useMantineTheme();

  const columns = [
    {
      key: "name",
      label: "Campaigns",
      icon: <IconClipboardList size={20}  color={theme.colors.ui[0]} />,
    },
    {
      key: "dataset",
      label: "Dataset",
      icon: <IconListCheck size={20}  color={theme.colors.ui[0]}/>,
      alignItems: "center",
    },
    {
      key: "videos",
      label: "Videos",
      icon: <IconMovie size={20}  color={theme.colors.ui[0]}/>,
      alignItems: "center",
    },
    {
      key: "assets",
      label: "Assets",
      icon: <IconPhoto size={20}  color={theme.colors.ui[0]}/>,
      alignItems: "center",
    },
    {
      key: "status",
      label: "Status",
      icon: <IconListCheck size={20}  color={theme.colors.ui[0]}/>,
      alignItems: "center",
    },
    { key: "actions", label: "", icon: null, alignItems: null },
  ];
  return (
    <>
      <Grid>
        <Grid.Col span={8}>
          <UICopyWrapper>
            <P>{brand.Description}</P>
          </UICopyWrapper>
        </Grid.Col>
        <Grid.Col span={4}>
          <UIPaperWrapper>
            Manage Brand, Brand Settings, Create New Brand Campaign
          </UIPaperWrapper>
        </Grid.Col>
      </Grid>
      <Space h={20} />

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
                    <P Weight={600}>
                      {c.attributes.Name}
                    </P>
                  
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
    </>
  );
};
