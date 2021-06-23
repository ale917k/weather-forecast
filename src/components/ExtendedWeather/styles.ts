import styled from "styled-components";
import Card from "components/Card";
import { theme } from "globalStyles";

export const ErrorMessage = styled.p`
  color: ${theme.palette.common.white};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${Card} {
    &:not(:last-child) {
      margin-bottom: ${theme.spacing(8)};
    }
  }
`;

export const CardTitle = styled.h2`
  margin-bottom: ${theme.spacing(4)};
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  border-bottom: 1px solid ${theme.palette.grey[150]};
  border-left: 1px solid ${theme.palette.grey[150]};
  width: 100%;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${theme.palette.grey[150]};
    border-right: 1px solid ${theme.palette.grey[150]};
    padding: ${theme.spacing(2)};
  }
`;

export const Heading = styled.span``;

export const Content = styled.span``;

export const Img = styled.img`
  max-width: ${theme.spacing(5)};
`;
