import styled, { keyframes } from "styled-components";
import { theme } from "globalStyles";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSpinner = styled.div`
  width: ${theme.spacing(5)};
  height: ${theme.spacing(5)};

  &:after {
    content: "";
    display: block;
    width: calc(100% - ${theme.spacing(1)});
    height: calc(100% - ${theme.spacing(1)});
    border-radius: 50%;
    border: ${theme.spacing(0.5)} solid ${theme.palette.common.black};
    border-color: ${theme.palette.common.black} transparent ${theme.palette.common.black} transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;
