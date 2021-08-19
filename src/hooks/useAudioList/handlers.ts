import {AudioKey, AudioRecorder} from "./types";

export const deleteAudio = (audios: AudioRecorder[], audioKey: AudioKey) => {
  return audios.filter(audio => audio.key !== audioKey);
}
