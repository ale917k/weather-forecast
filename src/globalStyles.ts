import { createGlobalStyle, css } from "styled-components";
import { isMobile } from "react-device-detect";

/**
 * Generates a media query breakpoint based on a given max resolution.
 * @param res - Resolution to apply to the media query.
 * @returns media with specified min and max viewport width.
 */
const customMediaQuery = (res: number): string => `@media (max-width: ${res}px)`;

/**
 * Global object theme for consistency between different components styles.
 * Based on MUI theme: https://material-ui.com/customization/default-theme/#default-theme
 */
export const theme = {
  breakpoints: {
    custom: customMediaQuery,
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    phone: customMediaQuery(576),
  },
  palette: {
    common: {
      white: "#ffffff",
      black: "#292E38",
    },
    type: "light",
    primary: {
      light: "#5A8AF2",
      main: "#346FEF",
      dark: "#1356E7",
    },
    alert: {
      success: "#0B8329",
      error: "#83190B",
    },
    grey: {
      50: "#F9FAFB",
      100: "#E5E8EB",
      150: "#BAC3C9",
    },
    text: "#292E38",
  },
  typography: {
    fontFamily: "'Open Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: isMobile ? 14 : 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.25,
    },
    h2: {
      fontWeight: 300,
      fontSize: "1.4rem",
      lineHeight: 1.5,
      letterSpacing: "0.15em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.2rem",
      lineHeight: 1.5,
      letterSpacing: "0.1em",
    },
    body: {
      reg: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      sm: {
        fontSize: "0.833rem",
        lineHeight: 1.5,
      },
    },
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      textTransform: "uppercase",
    },
  },
  spacing: (x: number): string => `${x * 8}px`,
  shape: {
    borderRadius: "5px",
  },
  shadows: {
    3: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    5: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
    },
  },
};

/**
 * Global styles
 */
const windowSizes = css`
  width: 100%;
  height: 100%;
`;
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.fontFamily};

    &:focus {
      outline: none;
    };
  };

  html {
    ${windowSizes};
    font-size: ${theme.typography.fontSize};
    font-weight: ${theme.typography.fontWeightLight};

    &:not(:hover) #cursorCircle {
      opacity: 0;
      width: 32px !important;
      height: 32px !important;
    }
  };

  body {
    ${windowSizes};
  };

  #root {
    ${windowSizes};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  };

  h1 {
    ${theme.typography.h1};
  };

  h2 {
    ${theme.typography.h2};
    text-transform: uppercase;
    color: ${theme.palette.grey[150]};
  };

  h3 {
    ${theme.typography.h3};
  };
`;

export default GlobalStyles;
