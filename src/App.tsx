import Layout from "./layout";
import AudioContainer from "./components/AudioContainer";
import AudioControls from "./components/AudioControls";
import useAudioRecorder from "./hooks/useAudioRecorder";

function App() {
    const {audioRecorderState, ...handlers} = useAudioRecorder();

    const { recordingSeconds, recordingMinutes, startedRecording } = audioRecorderState;
    const { saveRecording, startRecording, cancelRecording } = handlers;

    return (
        <Layout>
            <AudioContainer>
                <AudioControls
                    minutes={recordingMinutes}
                    seconds={recordingSeconds}
                    starded={startedRecording}
                    cancelRecording={cancelRecording}
                    saveRecording={saveRecording}
                    startRecording={startRecording}
                />
            </AudioContainer>
        </Layout>
    );
}

export default App;
