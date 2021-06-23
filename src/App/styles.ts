import styled from "styled-components";
import { theme } from "globalStyles";
import background from "../assets/background.jpeg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(${background}) center / cover no-repeat;
  z-index: -1;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100% - ${theme.spacing(10)}); // Full viewport height - Header
  margin-top: ${theme.spacing(10)}; // Header height
  padding: ${theme.spacing(15)} 0;
  overflow-y: auto;
`;
