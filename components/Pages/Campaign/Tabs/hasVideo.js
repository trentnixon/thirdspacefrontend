import { Group, Table, Text, useMantineTheme } from "@mantine/core";
import {
  IconVideo,
  IconListCheck,
  IconMovie,
  IconClick,
} from "@tabler/icons-react";
import { BTN_LINK } from "../../../ui/btn";
import { UIPaperWrapper, UICopyWrapper } from "../../../ui/Containers";
import { H2, P } from "../../../ui/type";
import { DataTableHeader } from "../../../ui/table";

export const HasVideo = ({ Campaign }) => {
  return (
    <UICopyWrapper>
      <Group position="apart">
        <H2
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          Video
        </H2>
        <BTN_LINK LABEL={"Create"} HREF={`/thirdspace/video/`} />
      </Group>
      {Campaign.videos.data.length === 0 ? (
        <NoVideo />
      ) : (
        <ShowVideo Video={Campaign.videos.data} />
      )}
    </UICopyWrapper>
  );
};

const NoVideo = () => {
  return (
    <UIPaperWrapper>
      <Text align="center">No Videos created</Text>
    </UIPaperWrapper>
  );
};

const ShowVideo = ({ Video }) => {
  const theme = useMantineTheme();
  const columns = [
    {
      key: "name",
      label: "Name",
      icon: <IconListCheck color={theme.colors.ui[0]} size={20}/>,
    },
    {
      key: "dataset",
      label: "Dataset",
      icon: <IconListCheck color={theme.colors.ui[0]} size={20}/>,
      alignItems: "center",
    },
    {
      key: "renders",
      label: "Renders",
      icon: <IconMovie color={theme.colors.ui[0]} size={20}/>,
      alignItems: "center",
    },
    {
      key: "select",
      label: "Select",
      icon: <IconClick color={theme.colors.ui[0]} size={20} />,
      alignItems: "center",
    },
  ];
  return (
    <>
      <UIPaperWrapper>
        <Table>
          <DataTableHeader columns={columns} />
          <tbody>
            {Video.map((v, i) => {
              return (
                <tr key={i}>
                  <td style={{ textAlign: "center" }}>
                    <P>{v.attributes?.Name}</P>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {v?.attributes.dataset.data?.attributes?.Name}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {v?.attributes.renders.data.length}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <BTN_LINK
                      LABEL={`EDIT`}
                      HREF={`/thirdspace/video/${v.id}`}
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

/* <thead>
            <tr>
              <th>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <IconListCheck color={theme.colors.ui[0]} />
                  <P color={0}>Name</P>
                </div>
              </th>

              <th>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconListCheck color={theme.colors.ui[0]} />
                  <P color={0}>Dataset</P>
                </div>
              </th>
              <th>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconMovie color={theme.colors.ui[0]} />
                  <P color={0}>Renders</P>
                </div>
              </th>
              <th>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconClick color={theme.colors.ui[0]} />
                  <P color={0}>Select</P>
                </div>
              </th>
            </tr>
          </thead> */
