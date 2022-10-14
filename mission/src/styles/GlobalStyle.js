import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #efefef;
    font: 300 1rem/1.5 'Spoqa Hans Sans', sans-serif;
  }

  .a11yHidden {
    overflow: hidden;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: circle(0);
    width: 1px;
    height: 1px;
    margin: -1px;
    white-space: nowrap;
    
    caption& {
      position: static;
    }
    
    &.focusable:focus {
      visibility: initial;
      position: static;
      clip: auto;
      clip-path: unset;
      width: initial;
      height: initial;
      margin: initial;
      white-space: initial;
    }
  }
`;

export default GlobalStyle;
