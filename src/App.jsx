import { CartProvider } from './context/cartContext/CartContext.jsx'
import HomePage from './pages/HomePage.jsx'
import { Routes, Route } from 'react-router-dom'
import BasicLayout from './pages/layouts/BasicLayout.jsx'
import { ProductProvider } from './context/productsContext/ProductsContext.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import AddProduct from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'

const AppContext = ({children}) => {
    return ( 
        <ProductProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ProductProvider>
    )
}

function App() {

  return (
    <>
      <AppContext>
        <Routes>
          <Route path="/" element={<BasicLayout/>}>
            <Route index element={<HomePage />} />
            <Route path=':id' element={<ProductDetails />} />
            <Route path='addproduct' element={<AddProduct/>} />
            <Route path='editproduct/:id' element={<EditProduct/>} />
          </Route>
          </Routes>
      </AppContext>
    </>
  )
}

export default App
