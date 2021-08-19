import {Props} from "./types";

const Audio = ({src}: Props) => {
  return <audio src={src} controls/>
}

export default Audio;
