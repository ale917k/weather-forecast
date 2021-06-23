import styled from "styled-components";
import Card from "components/Card";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  align-self: flex-start;
  width: 100%;

  ${Card} {
    & > * {
      &:not(:last-child) {
        margin-bottom: ${theme.spacing(1)};
      }
    }
  }
`;

export const Coordinates = styled.div`
  display: flex;

  ${theme.breakpoints.phone} {
    flex-direction: column;
    text-align: center;
  }
`;

export const Coordinate = styled.span`
  ${theme.typography.body.sm};

  &:first-child {
    margin-right: ${theme.spacing(2)};
  }

  ${theme.breakpoints.phone} {
    &:first-child {
      margin-right: 0;
    }
  }
`;

export const Title = styled.h1`
  color: ${theme.palette.common.white};
  text-align: center;
`;

export const StyledDate = styled.span`
  text-transform: uppercase;
  ${theme.typography.body.sm};
`;

export const Temperature = styled.span`
  ${theme.typography.h1};
  font-size: 3rem;
`;

export const Property = styled.span`
  text-align: center;
`;
