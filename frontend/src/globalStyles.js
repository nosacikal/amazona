import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%; /* 16px x 62.5 = 10px = 1rem*/
    box-sizing: border-box
  }

  body {
    margin: 0;
    height: 100vh;
    font-size: 1.6rem;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }

  h1 {
    font-size: 1.8rem;
    padding: 1rem 0;
  }

  h2 {
    font-size: 1.6rem;
    padding: 1rem 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: #ff8000;
    transition: all 0.2s ease-in;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  /* Header */
  header a {
    color: #fff;
    padding: 1rem;
  }

  img {
    border-radius: 0.5rem
  }

  textarea, input, select {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem #a4a4a4 solid;
    font-size: 1.6rem;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: pointer;
    background-color: #f8f8f8;
  }

  main {
    grid-area: main;
    padding: 1rem;
  }
`
