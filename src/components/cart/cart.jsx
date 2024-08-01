import { useContext } from 'react'
import CartItem from './cartItem'
import AppContext from '../../context/appContext'
import './cart.css'
import formatCurrency from '../../util/formatCurrency'


const Cart = () => {

  const { cartItem, cartVisible } = useContext(AppContext)
  
  const totalPrice = cartItem.reduce((acc, item) => item.price + acc, 0)
      

  return (
    <div className={`cart ${cartVisible ? 'cart_active' : ''} `}>
      <h4
        style={{ backgroundColor: '#927d7d6b', color:'orangered' }}
        className="text-center fw-bold py-2"
      >
        SHOP CART
      </h4>

      <div className="overflow-auto flex-grow-1">
        {cartItem.map((cart) => (
          <CartItem key={cart.id} data={cart} />
        ))}
      </div>

      <h4
        style={{ backgroundColor: '#927d7d6b', color: 'orangered' }}
        className="text-center fw-bold py-2"
      >
        {formatCurrency(totalPrice, 'EUR')}
      </h4>
    </div>
  )
}

export default Cart
