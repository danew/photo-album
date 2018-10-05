import styled, { keyframes } from 'styled-components';

const flip = keyframes`
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotateY(180deg);
  }
  50% {
    transform: rotateY(180deg) rotateX(180deg);
  }
  75% {
    transform: rotateY(0deg) rotateX(180deg);
  }
  100% {
    transform: rotateY(0deg) rotateX(0deg);
  }
`;

const Loader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
  perspective: 60px;

  &::before{
    content: '';
    position: absolute;
    left: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    background-color: #ccc;
    animation: ${flip} 2s ease-out infinite;
  }
`;

export default Loader;