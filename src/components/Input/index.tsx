import React from "react";
import { Wrapper, StyledInput, Label } from "./styles";

type PropsType = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  required?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Custom input component.
 * @param {string} id - Input id.
 * @param {label} label - Label to display on input.
 * @param {required} required - Input required attribute.
 * @param {className} className - ClassName to apply custom styles.
 * @param {onChange} onChange - Function for controlled input.
 * @param {object} rest - HTML Input attributes as custom props.
 * @return - Controllable input element.
 */
const Input: React.FC<PropsType> = ({ id, label, required, className, onChange, ...rest }: PropsType) => (
  <Wrapper className={className}>
    <StyledInput {...rest} id={id} placeholder=" " required={required} onChange={onChange} />

    <Label htmlFor={id}>
      {label}
      {required && " *"}
    </Label>
  </Wrapper>
);

export default Input;
