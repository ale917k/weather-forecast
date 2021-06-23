import { theme } from "globalStyles";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto 1rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  border: 1px solid ${theme.palette.grey[150]};
  border-radius: 5px;
  outline: none;
  padding: 1rem 0.7rem;
  ${theme.typography.body.reg};

  &:hover {
    border-color: ${theme.palette.common.black};
  }

  &:focus {
    border-color: ${theme.palette.primary.main};

    & + label {
      color: ${theme.palette.primary.main};
      top: 1px;
      transform: translateY(-50%) scale(0.9);

      &:before {
        content: "";
      }
    }
  }

  &:not(:placeholder-shown) {
    & + label {
      top: 1px;
      transform: translateY(-50%) scale(0.9);

      &:before {
        content: "";
      }
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: ${theme.spacing(3)};
  transform: translateY(-50%);
  color: ${theme.palette.grey[150]};
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
  text-transform: capitalize;

  &:before {
    display: block;
    width: 100%;
    height: ${theme.spacing(1.35)};
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${theme.palette.common.white};
    z-index: -1;
  }

  ${theme.breakpoints.tablet} {
    top: ${theme.spacing(2.75)};
  }
`;
