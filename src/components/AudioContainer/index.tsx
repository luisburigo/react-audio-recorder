import {Props} from "./types";
import {Container} from "./styles";

const AudioContainer = ({children}: Props) => {
  return (
      <Container>
        {children}
      </Container>
  )
}

export default AudioContainer;
