import { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import AppContext from '../../context/appContext'

const ButtonCart = () => {
  const { cartVisible, setCartVisible, cartItem } = useContext(AppContext)

  const handleCart= ()=> { setCartVisible(!cartVisible) }

 
  return (
    <button
      onClick={handleCart}
      style={{ height: '35px' }}
      className="bg-transparent border-0 position-relative "
    >
      <AiOutlineShoppingCart className="fs-4" />

      {cartItem.length > 0 && (
        <span
          style={{
            width: '15px',
            height: '15px',
            fontSize: '12px',
            borderRadius: '25px',
            padding: '5px',
          }}
          className="position-absolute bg-danger top-0 end-0 text-white d-flex align-items-center justify-content-center"
        >
          {cartItem.length}
        </span>
      )}
    </button>
  )
}

export default ButtonCart
