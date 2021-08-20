import {useEffect, useState} from "react";
import {AudioKey, AudioRecorder} from "./types";
import {deleteAudio} from "./handlers";

import randomId from "utils/randomId";
import {db} from "config/db";

const useAudioList = (audio: string) => {
    const [audioList, setAudioList] = useState<AudioRecorder[]>([]);

    useEffect(() => {
        if (audio) {
            const key = randomId();

            setAudioList(prevState => ([
                ...prevState,
                {
                    key,
                    src: audio
                }
            ]));

            db.audios.add({src: audio, id: key}, key);
        }
    }, [audio]);

    useEffect(() => {
        const getAudios = async () => {
            const audios = await db.audios.toArray();
            setAudioList(audios.map(audio => ({
                key: audio.id,
                src: audio.src
            })))
        }

        getAudios();
    }, []);

    return {
        audioList,
        deleteAudio: (audioKey: AudioKey) => deleteAudio(audioList, audioKey),
    }
}

export default useAudioList;
