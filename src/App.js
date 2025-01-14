import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './component/Home'
import Cart from './component/Cart'
import ProductDetails from './component/ProductDetails'
import Products from './component/Products'
import Menu from './Header/Menu'
import Pnf from './util/Pnf'
import Categories from './component/Categories'
import LoginPage from './Auth/LoginPage'

function App() {

  return (
    <Router>
      <Menu />
      <ToastContainer autoClose={4000} position={'top-center'} />
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/categories"} element={<Categories />} />
          <Route path={"/products/:catName"} element={<Products />} />
          <Route path={"/product/:id/category/:catName"} element={<ProductDetails />} />
          <Route path={"/cart"} element={<Cart />} />
          {/* <Route path={"*"}element={<Pnf />} /> */}
          {/* <Route path={"/login"}element={<LoginPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
