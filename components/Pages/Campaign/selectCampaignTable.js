import { Table } from "@mantine/core";
import { BTN_LINK } from "../../../components/ui/btn";
import { P } from "../../../components/ui/type";
import { UIPaperWrapper } from "../../ui/Containers";

export const SelectCampaignFromTable = (props) => {
  const { Response } = props;
  console.log(Response);
  return (
    <UIPaperWrapper>
      <Table>
        <thead>
          <tr>
            <th>Active Brands</th>
            <th>Brand</th>
            <th>Datasets</th>
            <th>Videos</th>
            <th>Assets</th>

            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {Response.map((Campaign, i) => {
            return (
              <tr key={i}>
                <td>
                  <P>{Campaign.attributes.Name}</P>
                </td>
                <td>{Campaign.attributes.brand.data.attributes.Name}</td>
                <td>{Campaign.attributes.datasets.data.length}</td>
                <td>{Campaign.attributes.videos.data.length}</td>
                <td>{Campaign.attributes.video_assets.data.length}</td>
                <td>
                  <BTN_LINK
                    HREF={`/thirdspace/campaign/${Campaign.id}`}
                    LABEL={`View Campaign`}
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
