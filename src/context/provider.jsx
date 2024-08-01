import { useState } from "react"
import AppContext from "./appContext"
import propTypes from 'prop-types'

const Provider = ({ children }) => {
        
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cartItem, setCartItem] = useState([])
  const [cartVisible, setCartVisible]= useState(false)

  const value={
    products, setProducts, loading, setLoading, cartItem, setCartItem, cartVisible, setCartVisible
  }

  return (
    <div>
      <AppContext.Provider value={value} >
        { children }
      </AppContext.Provider>
    </div>
  )
}

export default Provider
Provider.propTypes={
    children: propTypes.any,
}.isRequired


