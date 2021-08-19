import {useEffect, useState} from "react";
import {cancelRecording, saveRecording, startRecording} from "./handlers";
import {State} from "./types";

const MAX_RECORDER_MINUTES = 5;

const initialState: State = {
    audio: undefined,
    mediaRecorder: null,
    mediaStream: null,
    recordingMinutes: 0,
    recordingSeconds: 0,
    startedRecording: false
}

const useAudioRecorder = () => {
    const [audioRecorderState, setAudioRecorderState] = useState<State>(initialState);

    useEffect(() => {
        let recordingInterval: NodeJS.Timeout;

        if (audioRecorderState.startedRecording) {
            recordingInterval = setInterval(() => {
                setAudioRecorderState(prevState => {
                    if (prevState.recordingMinutes === MAX_RECORDER_MINUTES &&
                        prevState.recordingSeconds === 0) {
                        clearInterval(recordingInterval);
                        return prevState;
                    }

                    if (prevState.recordingSeconds >= 0 &&
                        prevState.recordingSeconds < 59) {
                        return {
                            ...prevState,
                            recordingSeconds: prevState.recordingSeconds + 1,
                        }
                    }

                    if (prevState.recordingSeconds === 59) {
                        return {
                            ...prevState,
                            recordingMinutes: prevState.recordingMinutes + 1,
                            recordingSeconds: 0,
                        }
                    }

                    return prevState;
                })
            }, 1000);
        }

        return () => clearInterval(recordingInterval);
    });

    useEffect(() => {
        if (audioRecorderState.mediaStream) {
            setAudioRecorderState(prevState => {
                if (audioRecorderState.mediaStream) {
                    return {
                        ...prevState,
                        mediaRecorder: new MediaRecorder(audioRecorderState.mediaStream),
                    }
                }

                return prevState;
            })
        }
    }, [audioRecorderState.mediaStream]);

    useEffect(() => {
        const {mediaRecorder} = audioRecorderState;
        let chunks: Blob[] = [];

        if (mediaRecorder && mediaRecorder.state === "inactive") {
            mediaRecorder.start();

            mediaRecorder.ondataavailable = event => {
                chunks.push(event.data);
            }

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, {type: 'audio/ogg; codecs=opus'})
                chunks = [];

                setAudioRecorderState(prevState => {
                    if (prevState.mediaRecorder) {
                        return {
                            ...initialState,
                            audio: URL.createObjectURL(blob)
                        }
                    }

                    return initialState;
                })
            }

            return () => {
                if (mediaRecorder) {
                    mediaRecorder.stream.getAudioTracks().forEach(track => track.stop());
                }
            }
        }
    }, [audioRecorderState.mediaRecorder]);

    return {
        audioRecorderState,
        startRecording: () => startRecording(setAudioRecorderState),
        saveRecording: () => saveRecording(audioRecorderState.mediaRecorder),
        cancelRecording: () => cancelRecording(setAudioRecorderState, initialState)
    }
}

export default useAudioRecorder;
