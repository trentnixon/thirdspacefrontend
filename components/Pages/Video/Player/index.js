import { Player } from "@remotion/player";
import { useEffect, useRef } from "react";
import { VideoShell916 } from "../../../../Remotion/Templates/Video_916";
import { VideoShell45 } from "../../../../Remotion/Templates/Video_45";
import { VideoShellSQ } from "../../../../Remotion/Templates/Video_SQ";
import { splitAudioAndVisual } from "../../../../Remotion/Utils/FUNC/DataFormatting";

export const RemotionPlayer = (props) => {
  const { VideoOBJ, playerRef, RATIO } = props;

  const RatioObj = {
    VideoShell916: {
      component: VideoShell916,
      W: 1920,
      H: 1080,
      style: { width: "100%" },
    },
    VideoShell45: {
      component: VideoShell45, 
      W: 1080,
      H: 1350,
      style: { height: "600px" },
      wrapperStyle: { display: "flex", justifyContent: "center" },
    },
    VideoShellSQ: {
      component: VideoShellSQ,
      W: 1920,
      H: 1920 ,
      style: { height: "600px" },
      wrapperStyle: { display: "flex", justifyContent: "center" },
    },
  };

  useEffect(() => {}, [VideoOBJ]);
  useEffect(() => {
    if (playerRef.current) {
      //console.log(playerRef.current.getCurrentFrame());
    }
  }, [playerRef]);

  if (VideoOBJ.Series.length === 0) return <>Start video create</>;


  const FormattVideoData = (VIDEODATA) =>{
    
    const {SequenceAudio, SequenceVisual} = splitAudioAndVisual(VIDEODATA.Series);
    console.log("SequenceVisual", SequenceVisual)
    return {
      SequenceAudio,
      SequenceVisual,
      Settings: VIDEODATA.Settings,
    }
  }

console.log(VideoOBJ)
  return (
    <div style={RatioObj[RATIO].wrapperStyle}>
      <Player
        key={JSON.stringify(VideoOBJ) + RATIO}
        ref={playerRef}
        id={RATIO}
        component={RatioObj[RATIO].component}
        durationInFrames={FormattVideoData(VideoOBJ).SequenceVisual.reduce(
          (acc, obj) => acc + obj.DATA.Duration,
          0
        )}
        compositionWidth={RatioObj[RATIO].W}
        compositionHeight={RatioObj[RATIO].H}
        autoPlay={false}
        controls={true}
        fps={30}
        style={RatioObj[RATIO].style}
        inputProps={{
          DATA: FormattVideoData(VideoOBJ),  
          RESOLUTION:{
						w: RatioObj[RATIO].W,
            h: RatioObj[RATIO].H,
					}   
        }}
      />
    </div>
  );
};