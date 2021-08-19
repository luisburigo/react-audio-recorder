import {Props} from "./types";
import {AudioContainer, Container, EmptyAudio} from "./styles";
import Audio from "../Audio";

const AudioList = ({audios}: Props) => {
    const hasAudios = audios.length;

    if (!hasAudios) {
        return (
            <Container>
                <EmptyAudio>
                    Empty audio list 😒
                </EmptyAudio>
            </Container>
        )
    }

    return (
        <Container>
            {audios.map(audio => (
                <AudioContainer key={audio.key}>
                    <Audio src={audio.src}/>
                </AudioContainer>
            ))}
        </Container>
    )
}

export default AudioList;
