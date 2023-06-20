import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CoffeesContextProvider } from './contexts/CoffeesContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </CoffeesContextProvider>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
