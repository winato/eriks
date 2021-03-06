import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1rem;
`
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    text-align: left;
    overflow-x: hidden;
  }

  html {
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }
`

export {
  Container,
  GlobalStyles
}
