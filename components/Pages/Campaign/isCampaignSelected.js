import { Grid, Container, Stack, Table } from "@mantine/core";
import { BTN_LINK } from "../../ui/btn";
import { UIPaperWrapper, UICopyWrapper } from "../../ui/Containers";
import { H1, P } from "../../ui/type";

export const IsCampaignSelected = ({ campaign, updateSession }) => {
  const handleNothing = () => {
    console.log("Nothing to see here");
  };

  const tableData = [
    { label: "Create Video", href: "/thirdspace/video/create" },
    { label: "Create Dataset", href: "/thirdspace/data/create" },
    { label: "Create Asset", href: "/thirdspace/assets/create" },
  ];

  return (
    <Grid>
      <Grid.Col span={8}>
        <UICopyWrapper>
          <P>{campaign.Description}</P>
        </UICopyWrapper>
      </Grid.Col>
      <Grid.Col span={3} offset={1}>
        <UIPaperWrapper>
          <Table>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.label}>
                  <td>{item.label}</td>
                  <td style={{ textAlign: "right" }}>
                    <BTN_LINK LABEL={`Go`} HREF={item.href} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </UIPaperWrapper>
      </Grid.Col>
    </Grid>
  );
};
