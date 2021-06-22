import React from "react";
import { Background, StyledSpinner } from "./styles";

/**
 * Spinner component, used when lazy loading pages / components.
 */
const Spinner: React.FC = () => (
  <Background>
    <StyledSpinner />
  </Background>
);

export default Spinner;
