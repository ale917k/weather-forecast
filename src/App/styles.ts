import styled from "styled-components";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - ${theme.spacing(10)});
  margin-top: ${theme.spacing(10)}; // Header height
  padding: ${theme.spacing(5)} 0;
  background: ${theme.palette.grey[50]};
`;
