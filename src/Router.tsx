import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home/Home'
import { Cart } from './components/pages/Cart/Cart'
import { Product } from './components/pages/Product/Product'

export function Router() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
      </Routes>
    </>
  )
}
