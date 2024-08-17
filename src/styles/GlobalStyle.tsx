import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const beige = "#E8DFD4";
export const taupe = "#706962";
export const charcoal = "#262525";
export const fog = "#EAEAEA";
export const black = "000";
export const white = "#fff";

const GlobalStyle = createGlobalStyle`
${reset}

:root {
    font-family: Helvetica, Inter, system-ui, Avenir, Arial, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background: ${charcoal};
    color: ${white};
}

`;

export default GlobalStyle;
