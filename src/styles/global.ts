import { createGlobalStyle, css } from 'styled-components'


const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: -moz-none;
    -o-user-select: none;
    user-select: none;
  }

  *,
  *::before,
  *::after {
  box-sizing: border-box;
  }

  ul[class],
  ol[class] {
  padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
  margin: 0;
  }

  body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  }

  ul[class],
  ol[class] {
  list-style: none;
  }

  a:not([class]) {
  text-decoration-skip-ink: auto;
  }

  img {
  max-width: 100%;
  display: block;
  }

  article > * + * {
  margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
  font: inherit;
  }

  ${css`
      --tg-theme-secondary-bg-color: ${'#101010'};
      --tg-theme-header-bg-color: ${'#101010'};
      --tg-theme-bg-color: ${'#101010'};
  `}

  html {
    font-size: 10px;

    background: #101010;

    font-family: SplineSans;
  }

  body {
    font-family: SplineSans;

    overflow-y: hidden;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 814px) {
      justify-content: flex-start;
    };

    height: 100vh;  
    max-height: -webkit-fill-available;

    @media (min-width: 814px) {
      overflow-y: hidden;
    }

    &::-webkit-scrollbar {
      width: 3px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #ECE7DB;
      border-radius: 15px;
    }
  }

  #root { 
    width: 100%;
    height: 100%;

    overflow-x: hidden;

    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;

    &::-webkit-scrollbar {
      width: 3px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #ECE7DB;
      border-radius: 15px;
    }

    --rt-opacity: 1;
  }
`

export default GlobalStyles