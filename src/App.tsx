import Layout from "./layout";
import AudioContainer from "./components/AudioContainer";
import AudioControls from "./components/AudioControls";
import useAudioRecorder from "./hooks/useAudioRecorder";
import useAudioList from "./hooks/useAudioList";

function App() {
    const {audioRecorderState, ...handlers} = useAudioRecorder();
    const {audioList} = useAudioList(audioRecorderState.audio);

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
                {JSON.stringify(audioList)}
            </AudioContainer>
        </Layout>
    );
}

export default App;
