import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  *::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(107, 114, 128, 0.4); /* cinza médio (aprox. #6B7280) */
  border-radius: 3px;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 0.6);
}

* {scrollbar-width: thin;
  scrollbar-color: rgba(107, 114, 128, 0.4) transparent;
}

 
`

export default GlobalStyles
