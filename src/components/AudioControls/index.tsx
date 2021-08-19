import {Props} from "./types";
import {Container, Counter, CounterContainer, IconCancelContainer, IconContainer} from "./styles";
import {MdCancel as CancelIcon, MdMic as MicIcon, MdSave as SaveIcon} from "react-icons/md";
import formatTime from "../../utils/formatTime";

const AudioControls = (props: Props) => {
    const {minutes, seconds, starded, ...handlers} = props;
    const {startRecording, saveRecording, cancelRecording} = handlers;

    return (
        <Container>
            <CounterContainer>
                {starded && (
                    <IconCancelContainer onClick={cancelRecording}>
                        <CancelIcon/>
                    </IconCancelContainer>
                )}
                <Counter showIndicator={starded}>
                    {formatTime(minutes, seconds)}
                </Counter>
            </CounterContainer>
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
