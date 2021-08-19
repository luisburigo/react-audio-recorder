import styled, {keyframes} from "styled-components";
import {CounterProps} from "./types";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const animateRecording = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const Counter = styled.div<CounterProps>`
  font-size: 20px;
  position: relative;

  &::after {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #f34040;
    position: absolute;
    top: 10px;
    right: -10px;
    display: ${props => props.showIndicator ? 'block' : 'none'};

    animation-name: ${animateRecording};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  padding: .2em;
  
  border-radius: 50%;
  box-shadow: 1px 1px 10px rgba(0,0,0, .1);
  
  font-size: 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconCancelContainer = styled.div`
  width: 15px;
  height: 15px;
  font-size: 15px;
  
  margin-right: 5px;
`;
