import { P } from "../../../ui/type";
import { RemotionPlayer } from "../Player";
import { VideoDataset } from "../VideoPreviewContainer/VideoDataset";

export const ViewRemotionPreview = (props) => {

  return (
    <>
      <RemotionPlayer
        {...props}
      />
      <VideoDataset 
        {...props}
      />
    </>
  );
};
