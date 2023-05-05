import { HasAssets } from "./Tabs/hasAssets";
import { HasDataSet } from "./Tabs/hasDataset";
import { HasVideo } from "./Tabs/hasVideo";

export const CampaignTabs = ({ Campaign }) => {
  return (
    <>
     {/* <HasVideo Campaign={Campaign} />*/}
       <HasDataSet Campaign={Campaign} />
      <HasAssets Campaign={Campaign} />  
    </>
  );
};
