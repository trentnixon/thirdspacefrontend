import { Image, Table, useMantineTheme } from "@mantine/core";
import {
  IconActivity,
  IconCheckbox,
  IconClipboardList,
} from "@tabler/icons-react";
import { BTN_LINK } from "../../../components/ui/btn";
import { P } from "../../../components/ui/type";
import { UIPaperWrapper } from "../../ui/Containers";
import { DataTableHeader } from "../../ui/table";

export const SelectBrandFromTable = (props) => {
  const { Response } = props;
  const theme = useMantineTheme();
  const columns = [
    {
      key: "Name",
      label: "Name",
      icon: <IconClipboardList color={theme.colors.ui[0]} size={20} />,
      alignItems: "start",
    },
    {
      key: "ActiveBrands",
      label: "Active Brands",
      icon: <IconActivity color={theme.colors.ui[0]} size={20} />,
      alignItems: "center",
    },
    {
      key: "Select",
      label: "Select",
      icon: <IconCheckbox color={theme.colors.ui[0]} size={20} />,
      alignItems: "center",
      style: {
        textAlign: "center",
      },
    },
  ];

  //console.log(Response)
  if(!Response) return
  return (
    <UIPaperWrapper>
      <Table>
        <DataTableHeader columns={columns} />

        <tbody>
          {Response.map((Brand, i) => {
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
                  <P Weight={600}>{Brand.attributes.Name}</P>
                  
                </td>
                <td style={{ textAlign: "center" }}></td>

                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  <BTN_LINK
                    LABEL={`Select`}
                    HREF={`/thirdspace/brand/${Brand.id}`}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </UIPaperWrapper>
  );
};
