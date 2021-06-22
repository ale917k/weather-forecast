import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "globalStyles";

export const Wrapper = styled.header<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${theme.spacing(10)};
  box-shadow: ${theme.shadows[3]};
  z-index: 1;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => (props.isMenuOpen ? "100vh" : theme.spacing(10))};
    background-color: ${theme.palette.common.white};
    z-index: -1;
    transition: all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
  }
`;

export const Logo = styled(Link)`
  position: relative;
  color: ${theme.palette.common.black};
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.palette.common.black};
    transition: width ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut};
  }

  @media (hover: hover) {
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
`;

export const Menu = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;

  & > li {
    display: flex;

    & > a {
      padding: ${theme.spacing(2)} ${theme.spacing(4)};
      border-radius: ${theme.shape.borderRadius};
      ${theme.typography.body.reg};
      color: ${theme.palette.common.black};
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.03rem;
      transition: background-color ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut};

      @media (hover: hover) {
        &:hover {
          background-color: ${theme.palette.grey[100]};
        }
      }
    }

    &:not(:last-of-type) {
      margin-right: ${theme.spacing(1)};
    }
  }

  ${theme.breakpoints.phone} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    pointer-events: ${(props) => (props.isMenuOpen ? "all" : "none")};

    & > li {
      opacity: 0;

      &:not(:last-of-type) {
        margin-right: 0;
      }
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;
  padding: ${theme.spacing(3)} ${theme.spacing(2)};
  cursor: pointer;

  ${theme.breakpoints.phone} {
    display: block;
  }
`;

export const BurgerMenu = styled.div<{ isMenuOpen: boolean }>`
  position: relative;
  width: 22px;
  height: 3px;
  background: ${(props) => (props.isMenuOpen ? "transparent" : theme.palette.common.black)};
  border-radius: 5px;
  transition: all ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut};

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: ${(props) => (props.isMenuOpen ? "21px" : "22px")};
    height: 3px;
    background: ${theme.palette.common.black};
    border-radius: 5px;
    transition: all ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut};
  }

  &:before {
    transform: ${(props) => (props.isMenuOpen ? "translateX(4px) translateY(-7px) rotate(45deg)" : "translateY(-7px)")};
    transform-origin: top left;
  }

  &:after {
    transform: ${(props) => (props.isMenuOpen ? "translateX(4px) translateY(7px) rotate(-45deg)" : "translateY(7px)")};
    transform-origin: bottom left;
  }
`;
