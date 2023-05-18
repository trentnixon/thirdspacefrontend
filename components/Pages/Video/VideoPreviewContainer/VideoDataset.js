import { Table } from "@mantine/core";
import { UIPaperWrapper } from "../../../ui/Containers";
import { H3 } from "../../../ui/type";
import { BTN_ICON_FUNC } from "../../../ui/btn";
import { IconCheck, IconEye } from "@tabler/icons-react";

export const VideoDataset = ({
  dataSet,
  previewDataSetRow,
  setpreviewDataSetRow,
}) => {
//console.log(dataSet.data_set_rows.data.length);
  return (
    <>
      <H3>
        DATASET : {dataSet.Name} ({dataSet.data_set_rows.data.length})
      </H3>
      <UIPaperWrapper>
        <DatasetTable
          DATASET={dataSet.data_set_rows.data}
          previewDataSetRow={previewDataSetRow}
          setpreviewDataSetRow={setpreviewDataSetRow}
        />
      </UIPaperWrapper>
    </>
  );
};

const DatasetTable = ({ DATASET, setpreviewDataSetRow,previewDataSetRow }) => {
  return (
    <Table>
      <thead>
        {DATASET.slice(0, 1).map((row, i) => {
          const sortedItems = row.attributes.data_set_items.data.sort(
            (a, b) => {
              if (a.attributes.Key < b.attributes.Key) {
                return -1;
              }
              if (a.attributes.Key > b.attributes.Key) {
                return 1;
              }
              return 0;
            }
          );
          return (
            <tr key={row.attributes.Name}>
              {sortedItems.map((item, i) => {
                return <th key={item.attributes.Key}>{item.attributes.Key}</th>;
              })}
              <th></th>
            </tr>
          );
        })}
      </thead>
      <tbody>
        {DATASET.map((row, i) => {
          const sortedItems = row.attributes.data_set_items.data.sort(
            (a, b) => {
              if (a.attributes.Key < b.attributes.Key) {
                return -1;
              }
              if (a.attributes.Key > b.attributes.Key) {
                return 1;
              }
              return 0;
            }
          );

          return (
            <tr key={row.attributes.Name}>
              {sortedItems.map((item, i) => {
                return (
                  <td key={item.attributes.Value}>{item.attributes.Value}</td>
                );
              })}
              <td>
                {
                  i === previewDataSetRow ? <IconCheck />:<BTN_ICON_FUNC
                  HANDLE={() => {
                    setpreviewDataSetRow(i);
                  }}
                  ICON={<IconEye />}
                />
                }
                
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
