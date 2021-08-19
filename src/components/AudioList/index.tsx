import {Props} from "./types";
import {AudioContainer, Container, EmptyAudio} from "./styles";

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
                    <audio src={audio.src} controls/>
                </AudioContainer>
            ))}
        </Container>
    )
}

export default AudioList;
