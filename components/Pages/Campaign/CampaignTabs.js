import { HasAssets } from "./Tabs/hasAssets";
import { HasDataSet } from "./Tabs/hasDataset";
import { HasVideo } from "./Tabs/hasVideo";

export const CampaignTabs = (props) => {
  return (
    <>
      <HasVideo  {...props}/>
      <HasDataSet   {...props} />
      <HasAssets   {...props} />
    </>
  );
};
