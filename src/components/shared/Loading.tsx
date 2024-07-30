import styled, { keyframes } from "styled-components";

function Loading() {
  return <Circle />;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  animation: ${rotate} 2s linear infinite;

  width: 90px;
  height: 90px;
  border-radius: 50%;
  border-top: 6px solid #ced4da;
  border-right: 6px solid #ced4da;
  border-bottom: 6px solid #ced4da;
  border-left: 6px solid #000000;

  background-color: transparent;
`;

export default Loading;
