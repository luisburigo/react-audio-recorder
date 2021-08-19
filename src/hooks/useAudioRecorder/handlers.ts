import {State} from "./types";

type SetStateAction = React.Dispatch<React.SetStateAction<State>>;

export const startRecording = async (setState: SetStateAction) => {
    try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });

        setState(prevState => ({
            ...prevState,
            startedRecording: true,
            mediaStream,
        }))
    } catch (e) {
        console.log('Start recorder error: ', e);
    }
}

export const saveRecording = (mediaRecorder: MediaRecorder | null) => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
    }
}

export const cancelRecording = (setState: SetStateAction, initialState: State) => {
    setState(initialState);
}
