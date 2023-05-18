import { Group, Table, useMantineTheme } from "@mantine/core";
import {
  IconListCheck,
  IconClick,
} from "@tabler/icons-react";
import { BTN_LINK } from "../../../ui/btn";
import { UIPaperWrapper, UICopyWrapper } from "../../../ui/Containers";
import { H2, P } from "../../../ui/type";
import { DataTableHeader } from "../../../ui/table";

export const HasDataSet =(props) => {
  const { Campaign,CampaignID } = props
  //console.log("hasDataset", Campaign)
  const theme = useMantineTheme();
  const columns = [
    {
      key: "name",
      label: "Name",
      icon: <IconListCheck color={theme.colors.ui[0]} size={20} />,
    },
    {
      key: "rows",
      label: "Rows",
      icon: <IconListCheck color={theme.colors.ui[0]} size={20} />,
      alignItems: "center",
    },
    {
      key: "items",
      label: "Items",
      icon: <IconListCheck color={theme.colors.ui[0]} size={20}/>,
      alignItems: "center",
    },
    {
      key: "view",
      label: "View",
      icon: <IconClick color={theme.colors.ui[0]} size={20}/>,
      alignItems: "center",
    },
  ];

  return (
    <UICopyWrapper>
      <Group position="apart">
        <H2 style={{ display: "flex", alignItems: "center" }}>
          Datasets
        </H2>
        <BTN_LINK LABEL={"Manage"} HREF={`/thirdspace/data/create?id=${CampaignID}`} />
      </Group>

      {Campaign.datasets.data.length === 0 ? (
        'NoDataSet'
      ) : (
        <UIPaperWrapper>
          <Table>
            <DataTableHeader columns={columns} />
            <tbody>
              {Campaign.datasets.data.map((v, i) => {
                return (
                  <tr key={i}>
                    <td style={{ textAlign: "center" }}>
                      <P>{v.attributes?.Name}</P>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {v.attributes.data_set_rows.data.length}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {
                        v.attributes.data_set_rows.data[0].attributes
                          .data_set_items.data.length
                      }
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <BTN_LINK
                        LABEL={`EDIT`}
                        HREF={`/thirdspace/data/${v.id}`}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </UIPaperWrapper>
      )}
    </UICopyWrapper>
  );
};
