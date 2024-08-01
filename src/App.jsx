import Footer from './components/footer/footer'
import Header from './components/header/header'
import Products from './pages/products'
import Provider from './context/provider'
import Cart from './components/cart/cart'

const App = () => {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
      <Footer />
    </Provider>
  )
}

export default App
