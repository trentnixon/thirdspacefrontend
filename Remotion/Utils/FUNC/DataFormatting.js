export function splitAudioAndVisual(arr) {
  return {
    SequenceAudio: arr.filter(item => item.Type === "Audio"),
    SequenceVisual: arr.filter(item => item.Type !== "Audio"),
  };
}