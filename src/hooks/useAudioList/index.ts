import {useEffect, useState} from "react";
import {AudioKey, AudioRecorder} from "./types";
import {deleteAudio} from "./handlers";

import randomId from "utils/randomId";

const useAudioList = (audio: string) => {
    const [audioList, setAudioList] = useState<AudioRecorder[]>([]);

    useEffect(() => {
        if (audio) {
            setAudioList(prevState => ([
                ...prevState,
                {
                    key: randomId(),
                    src: audio
                }
            ]))
        }
    }, [audio]);

    return {
        audioList,
        deleteAudio: (audioKey: AudioKey) => deleteAudio(audioList, audioKey),
    }
}

export default useAudioList;
