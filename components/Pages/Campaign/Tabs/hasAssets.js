import { Group } from "@mantine/core";
import { BTN_LINK } from "../../../ui/btn";
import { UICopyWrapper } from "../../../ui/Containers";
import { H2 } from "../../../ui/type";

import { NoAssets, ShowAssets } from "../../../Common/DisplayAssignedAssets";
export const HasAssets = (props) => {
  const { Campaign, CampaignID } = props;
  return (
    <UICopyWrapper>
      <Group position="apart">
        <H2>Assets</H2>
        <BTN_LINK
          LABEL={"Manage"}
          HREF={`/thirdspace/assets/create?id=${CampaignID}`}
        />
      </Group>
      {Campaign.video_assets.data.length === 0 ? (
        <NoAssets />
      ) : (
        <ShowAssets Assets={Campaign.video_assets.data} />
      )}
    </UICopyWrapper>
  );
};
