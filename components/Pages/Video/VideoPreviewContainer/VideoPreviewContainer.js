// PACKAGES
import { Group, Table } from "@mantine/core";
import { useState, useEffect } from "react";
// COMPONENTS
import { RemotionPlayer } from "../Player";
import { SelectRatio } from "./SelectRatio";
import { HowtoStart } from "./HowtoStart";
import { RenderCampaignOptions } from "./RenderSampleCTA";
import { TimeDisplay } from "./TimeDisplay";
import { H4 } from "../../../ui/type";
import { mainCompileVideoObjects } from "../../../../utils/FUNC_Video";
import { UIPaperWrapper } from "../../../ui/Containers";

export const VideoPreviewContainer = (props) => {
  const { VideoOBJ, playerRef, previewDataSetRow, DATAROW } = props;

  const [RatioValue, setRatioValue] = useState("VideoShell916");
  const [isLoading, setIsLoading] = useState(true);
  const useSequence = mainCompileVideoObjects(VideoOBJ, DATAROW);

  useEffect(() => {
    if (useSequence) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [useSequence]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (useSequence[previewDataSetRow].Series.length === 0) {
    return <HowtoStart />;
  }

  return (
    <>
      <RemotionPlayer
        VideoOBJ={useSequence[previewDataSetRow]}
        playerRef={playerRef}
        RATIO={RatioValue}
      />
      <TimeDisplay playerRef={playerRef} />
      <Group position="right" my={10}>
        <SelectRatio setRatioValue={setRatioValue} />
      </Group>
      <H4>Preview Data</H4>

      <UIPaperWrapper>
        <DatasetTable
          DATASET={
            DATAROW.data_set_rows.data[previewDataSetRow].attributes
              .data_set_items.data
          }
        />
      </UIPaperWrapper>
    </>
  );
};

const DatasetTable = ({ DATASET }) => {
  const sortedItems = DATASET.sort((a, b) => {
    if (a.attributes.Key < b.attributes.Key) {
      return -1;
    }
    if (a.attributes.Key > b.attributes.Key) {
      return 1;
    }
    return 0;
  });
  return (
    <Table>
      <thead>
        <tr>
          {sortedItems.map((item, i) => {
            return <th key={item.attributes.Key}>{item.attributes.Key}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {sortedItems.map((item, i) => {
            return <td key={item.attributes.Value}>{item.attributes.Value}</td>;
          })}
        </tr>
      </tbody>
    </Table>
  );
};
