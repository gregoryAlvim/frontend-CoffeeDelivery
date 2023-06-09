import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      font-size: 62.5%;
   }

   :focus {
      outline: 0;
      /* box-shadow: 0 0 0 2px ${({ theme }) => theme['gray-100']}; */
   }

   body {
      background: ${({ theme }) => theme.background};
      /* color: ${({ theme }) => theme['gray-300']}; */
      -webkit-font-smoothing: antialiased;
   }

   body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
   }
`
