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
