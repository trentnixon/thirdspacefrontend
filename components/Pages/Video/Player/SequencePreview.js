import { Player, Thumbnail } from "@remotion/player";
import { useEffect, useState } from "react";
import { VideoShell916 } from "../../../../Remotion/Templates/Video_916";
import { VideoShellSQ } from "../../../../Remotion/Templates/Video_SQ";
import { miniCompileVideoObjects } from "../../../../utils/FUNC_Video";
import { splitAudioAndVisual } from "../../../../Remotion/Utils/FUNC/DataFormatting";
const MustHave = [
  "BackgroundVideo",
  "BackgroundMediaImage",
  "BackgroundMediaColor",
  "IMGBefore"
];

export const RemotionSequencePlayer = ({ DATA, dataSet,Settings }) => {
  const [SequenceOBJ, setVideoObjects] = useState(
    miniCompileVideoObjects(DATA, dataSet)[0]
  );

  useEffect(() => {
    setVideoObjects(miniCompileVideoObjects(DATA, dataSet)[0]);
  }, [DATA]);

  function hasMustHave(obj, mustHave) {
    for (let key in obj) {
      if (mustHave.includes(key)) {
        return true;
      }
    }
    return false;
  }

  
  const FormattVideoData = (VIDEODATA) =>{
    console.log(VIDEODATA)
    const {SequenceAudio, SequenceVisual} = splitAudioAndVisual(VIDEODATA);
    return {
      SequenceAudio,
      SequenceVisual,
      Settings: Settings,
    }
  }

  console.log(FormattVideoData([SequenceOBJ]))


  if (SequenceOBJ.length === 0) return <>Start video create</>;

  if (
    SequenceOBJ.DATA.Duration === undefined ||
    SequenceOBJ.DATA.Duration === 0
  )
    return <>Preview Unavailable at this time</>;
  if (!hasMustHave(SequenceOBJ.DATA, MustHave))
    return <>Preview Unavailable, Key Sequence items missing</>;
  return (
    <>
    
    <Player
      id="VideoShell916" 
      component={VideoShell916}
      durationInFrames={SequenceOBJ.DATA.Duration}
      compositionWidth={1920}
      compositionHeight={1080}
      autoPlay={false}
      controls={true}
      fps={30}
      style={{ width: "100%" }}
      inputProps={{
        DATA:FormattVideoData([SequenceOBJ]),
        RESOLUTION:{
          w:1920,
          h:1080
        }  
      }}
    />
    </>
  );
};

export const SequenceThumb = ({ DATA, dataSet }) => {
  const [SequenceOBJ, setVideoObjects] = useState([]);

//console.log(DATA, dataSet);
  useEffect(() => {
    setVideoObjects(miniCompileVideoObjects(DATA, dataSet)[0]);
  }, [DATA]);

  if (SequenceOBJ.length === 0) return <>Start video create</>;

  if (
    SequenceOBJ.DATA.Duration === undefined ||
    SequenceOBJ.DATA.Duration === 0
  )
    return <>Preview Unavailable at this time</>;

  return (
    <Thumbnail
      component={VideoShellSQ}
      compositionWidth={1920}
      compositionHeight={1080}
      style={{
        borderRadius: 10,
        width: "100%",
        position: "absolute",
        top: "0",
        left: 0,
        opacity: 0.5,
      }}
      frameToDisplay={15}
      durationInFrames={SequenceOBJ.DATA.Duration}
      fps={30}
      inputProps={{
        DATA: {
          "Settings": {
            "Theme": {
              "Primary": "#fff",
              "Secondary": "#000",
              "BackgroundColor": "#333"
            },
            "Font": {
              "fontFamily": "Montserrat"
            }
          },
          Series: [SequenceOBJ],
        },
        RESOLUTION:{
          w:1920,
          h:1080
        } 
      }}
    />
  );
};

export const SequencePreview = (DATA) => {
  //console.log(DATA)
  return (
    <Player
      id="VideoShell916"
      component={VideoShell916}
      durationInFrames={DATA.DATA.DATA.Duration}
      compositionWidth={1920}
      compositionHeight={1080}
      autoPlay={false}
      controls={true}
      fps={30}
      style={{ width: "100%" }}
      inputProps={{
        DATA: { Series: [DATA.DATA] }, 
        RESOLUTION:{
          w:1920,
          h:1080
        } 
      }}
    />
  );
};
