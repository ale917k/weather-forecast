import styled from "styled-components";
import { theme } from "globalStyles";

/**
 * Styled Card component used as wrapper on weather data.
 */
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${theme.spacing(110)};
  background: ${theme.palette.common.white}CC; // Where 'CC' is opacity expressed in hexadecimal (204 / 255)
  box-shadow: ${theme.shadows[3]};
  border-radius: ${theme.shape.borderRadius};
  margin: auto;
  padding: ${theme.spacing(6)} ${theme.spacing(8)};

  ${theme.breakpoints.phone} {
    padding: ${theme.spacing(3)} ${theme.spacing(4)};
  }
`;

export default Card;
