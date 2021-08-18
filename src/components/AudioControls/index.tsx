import {Props} from "./types";
import {Container, Counter, IconContainer} from "./styles";
import {MdMic as MicIcon} from "react-icons/md";

const AudioControls = (props: Props) => {
  return (
      <Container>
        <Counter>
          00:00
        </Counter>
        <IconContainer>
          <MicIcon />
        </IconContainer>
      </Container>
  )
}

export default AudioControls;
