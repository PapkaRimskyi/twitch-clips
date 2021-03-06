import { createGlobalStyle } from 'styled-components';

import { DEFAULT_FONT_SIZE, DEFAULT_LINE_HEIGHT } from './style/variables';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    font-size: ${DEFAULT_FONT_SIZE};
    line-height: ${DEFAULT_LINE_HEIGHT};
  }

  * {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ol {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  input {
    border: none;
    font: {
      family: inherit;
      size: inherit;
    }
    color: inherit;
    background-color: inherit;
  }

  button {
    padding: 0;
    font: {
      family: inherit;
      size: inherit;
    }
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyles;
