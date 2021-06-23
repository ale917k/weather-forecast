import React from "react";
import { Background, StyledSpinner } from "./styles";

/**
 * Spinner component used to wait for asynchronous operations.
 * @returns Animated spinner.
 */
const Spinner: React.FC = () => (
  <Background>
    <StyledSpinner />
  </Background>
);

export default Spinner;
