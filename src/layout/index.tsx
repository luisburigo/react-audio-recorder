import { Container } from "./styles";
import {Props} from "./types";

const Layout = ({ children }: Props) => {
  return (
      <Container>
          {children}
      </Container>
  )
}

export default Layout;
