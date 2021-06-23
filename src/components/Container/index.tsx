import React from "react";
import { Wrapper } from "./styles";

type Props = {
  children: React.ReactNode;
};

/**
 * Container wrapper for keeping content within theme sizes.
 * @param {ReactNode} children - Content displayed within container.
 * @returns Wrapped content.
 */
const Container: React.FC<Props> = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default Container;
