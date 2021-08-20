import {AudioKey, AudioRecorder} from "./types";
import {db} from "../../config/db";

export const deleteAudio = async (audios: AudioRecorder[], audioKey: AudioKey) => {
  await db.audios.delete(audioKey);
  return audios.filter(audio => audio.key !== audioKey);
}
