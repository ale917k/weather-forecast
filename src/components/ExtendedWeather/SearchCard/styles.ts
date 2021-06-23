import styled from "styled-components";
import Input from "components/Input";
import { theme } from "globalStyles";

export const SearchGroup = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchTitle = styled.h1`
  margin-bottom: ${theme.spacing(4)};
  text-align: center;
`;

export const FilterInput = styled(Input)`
  &:not(:last-child) {
    margin-right: ${theme.spacing(3)};
  }
`;

export const ResetButton = styled.button`
  background-color: ${theme.palette.primary.main};
  border: none;
  border-radius: ${theme.shape.borderRadius};
  margin-top: ${theme.spacing(2)};
  padding: ${theme.spacing(2)} ${theme.spacing(4)};
  ${theme.typography.body.sm};
  color: ${theme.palette.common.white};
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.03rem;
  transition: background-color ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut};
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.palette.primary.dark};
    }
  }
`;
