import {Props} from "./types";
import {Container, Counter, IconContainer} from "./styles";
import {MdMic as MicIcon, MdSave as SaveIcon} from "react-icons/md";
import formatTime from "../../utils/formatTime";

const AudioControls = (props: Props) => {
    const {minutes, seconds, starded, ...handlers} = props;
    const {startRecording, saveRecording, cancelRecording} = handlers;

    return (
        <Container>
            <Counter>
                {formatTime(minutes, seconds)}
            </Counter>
            {starded ? (
                <IconContainer onClick={saveRecording}>
                    <SaveIcon/>
                </IconContainer>
            ) : (
                <IconContainer onClick={startRecording}>
                    <MicIcon/>
                </IconContainer>
            )}
        </Container>
    )
}

export default AudioControls;
