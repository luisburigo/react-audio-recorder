import {Props} from "./types";
import {Container, EmptyAudio} from "./styles";

const AudioList = ({audios}: Props) => {
    const hasAudios = audios.length;

    if (!hasAudios) {
        return <EmptyAudio/>
    }

    return (
        <Container>
            {audios.map(audio => (
                <audio key={audio.key} src={audio.src} controls/>
            ))}
        </Container>
    )
}

export default AudioList;
