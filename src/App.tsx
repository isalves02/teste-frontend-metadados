import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ShoppingContextProvider } from './context/GeneralContextProvider'

export default function App() {
  return (
    <>
    <ShoppingContextProvider>
      <BrowserRouter>
        <Header />
          <Router />
        <Footer />
      </BrowserRouter>
    </ShoppingContextProvider>
    </>
  )
}

