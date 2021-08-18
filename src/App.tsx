import Layout from "./layout";
import AudioContainer from "./components/AudioContainer";
import AudioControls from "./components/AudioControls";

function App() {
    return (
        <Layout>
            <AudioContainer>
                <AudioControls/>
            </AudioContainer>
        </Layout>
    );
}

export default App;
