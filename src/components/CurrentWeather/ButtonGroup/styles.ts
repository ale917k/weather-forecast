import styled from "styled-components";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${theme.spacing(10)} 0 ${theme.spacing(5)};
`;

export const Button = styled.button<{ active: boolean }>`
  position: relative;
  background: none;
  border: none;
  padding: ${theme.spacing(4)} ${theme.spacing(8)};
  ${theme.typography.h3};
  text-transform: uppercase;
  color: ${theme.palette.common.white};
  cursor: ${(props) => (props.active ? "default" : "pointer")};

  &:not(:last-child) {
    margin-right: ${theme.spacing(1)};
  }

  &:before {
    content: "";
    position: absolute;
    bottom: ${theme.spacing(3)};
    left: ${theme.spacing(8)};
    width: ${(props) => (props.active ? `calc(100% - ${theme.spacing(16)})` : 0)};
    height: 3px;
    background-color: ${theme.palette.common.white};
    transition: width ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut};
  }

  &:active {
    &:before {
      width: calc(100% - ${theme.spacing(16)});
    }
  }

  @media (hover: hover) {
    &:hover {
      &:before {
        width: calc(100% - ${theme.spacing(16)});
      }
    }
  }
`;
