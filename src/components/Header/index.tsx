import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

import Container from "components/Container";
import { theme } from "globalStyles";

import { Wrapper, Logo, Menu, MobileMenu, BurgerMenu } from "./styles";

/**
 * Main App's Header.
 * @return - Logo and Menu elements.
 */
const Header: React.FC = () => {
  const location = useLocation();

  const menu = useRef<HTMLDivElement | null>(null);
  const animating = useRef<boolean>(false);

  // Used for toggling mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenu = (): void => {
    if (menu?.current) {
      animating.current = true;

      setIsMenuOpen(true);
      gsap.to(menu.current.children, {
        opacity: 1,
        duration: theme.transitions.duration.short / 1000,
        stagger: 0.1,
        delay: theme.transitions.duration.standard / 1000 / 2, // Transition time for animating menu to slide down / 2
        onComplete: () => {
          animating.current = false;
        },
      });
    }
  };

  const closeMenu = (): void => {
    if (menu?.current) {
      animating.current = true;

      gsap.to(menu.current.children, {
        opacity: 0,
        duration: theme.transitions.duration.short / 1000,
        stagger: 0.1,
        onComplete: () => {
          animating.current = false;
        },
      });
      setTimeout(() => {
        setIsMenuOpen(false);
      }, theme.transitions.duration.short / 2);
    }
  };

  // Toggle mobile menu animating text to fade in / out
  const toggleMobileMenu = (): void => {
    if (!animating.current) {
      if (isMenuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }
  };

  // Close mobile menu every time the location / route changes
  useEffect(() => {
    if (isMenuOpen) {
      closeMenu();
    }
  }, [location]);

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <Container>
        <Logo to="/">Weather</Logo>

        <Menu ref={menu} isMenuOpen={isMenuOpen}>
          <li>
            <Link to="/">Current</Link>
          </li>
          <li>
            <Link to="/16-day">16-Day</Link>
          </li>
        </Menu>

        <MobileMenu onClick={toggleMobileMenu}>
          <BurgerMenu isMenuOpen={isMenuOpen} />
        </MobileMenu>
      </Container>
    </Wrapper>
  );
};

export default Header;
