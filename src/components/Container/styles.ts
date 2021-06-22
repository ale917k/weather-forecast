import styled from "styled-components";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacing(3)};
`;

export default Wrapper;
