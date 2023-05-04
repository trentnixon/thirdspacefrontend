import React from "react";
import { useCurrentPlayerFrame } from "./use-current-player-frame";

export function TimeDisplay(props) {
  const frame = useCurrentPlayerFrame(props.playerRef);

  return React.createElement("div", null, "current frame: ", frame);
}


export function ReturnTimeDisplay(props) {
    return useCurrentPlayerFrame(props.playerRef);
  }