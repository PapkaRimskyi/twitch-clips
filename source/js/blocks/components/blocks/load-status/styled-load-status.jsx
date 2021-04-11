import styled, { keyframes } from 'styled-components';

import { MARGIN_AUTO } from '../../../../style/variables';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(3);
  }
`;

export const Container = styled.div`
  margin: ${MARGIN_AUTO};
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorDescription = styled.p`
  margin-top: 50px;
  font-size: 1.5rem;
  line-height: 1.7rem;
  text-align: center;
`;

export const SVG = styled.svg`
  width: 50px;
  height: 50px;
`;

export const LoadingSVG = styled(SVG)`
  animation: ${rotate} .5s infinite;
`;

export const ErrorSVG = styled(SVG)`
  animation: ${pulse} 1s infinite alternate;
`;

export const LoadingSpinnerContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  & > ${LoadingSVG} {
    fill: #68be16;
  }
`;
