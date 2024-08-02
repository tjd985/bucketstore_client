import styled, { keyframes } from "styled-components";

function Toast({ errorMessage }: { errorMessage: string }) {
  return <ToastPopup>{errorMessage}</ToastPopup>;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ToastPopup = styled.div`
  position: fixed;
  top: 87%;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 10%;
  margin: 0 auto;
  border-radius: 20px;
  animation: ${fadeInUp} 0.5s ease-in-out;

  opacity: 0.8;
  background-color: #000000;
  color: #ffffff;
  font-size: 1.125rem;
  text-align: center;
  font-weight: bold;
`;

export default Toast;
