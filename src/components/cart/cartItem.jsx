import { BsCartX } from 'react-icons/bs'
import propTypes from 'prop-types'
import formatCurrency from '../../util/formatCurrency'
import { useContext, useState } from 'react'
import './cartItem.css'
import AppContext from '../../context/appContext'

const CartItem = ({ data }) => {
  const { thumbnail, title, price, id } = data
  const [hover, setHover] = useState(false)

  const { cartItem, setCartItem } = useContext(AppContext)

  const handleRemoveItem = () => {
    const upDated = cartItem.filter((item) => item.id != id)
    setCartItem(upDated)
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: 'pointer' }}
      className="cart_item m-3"
    >
      <div className="row">
        <div className="col-5">
          <img src={thumbnail} alt="img_prod" className="w-100" />
        </div>
        <div className="col-7">
          <div className="text-center">
            <p style={{ fontSize: '12px' }} className="fw-lighter">
              {title}
            </p>
            <p style={{ fontSize: '15px' }} className="fw-bold">
              {formatCurrency(price, 'EUR')}{' '}
            </p>
          </div>
        </div>
      </div>
      {hover && (
        <button
          onClick={handleRemoveItem}
          style={{ transition: 'all 600ms linear' }}
          className="btn btn-outline-danger rounded-5 position-absolute end-0 bottom-0 py-2 border-0"
        >
          <BsCartX />
        </button>
      )}
    </div>
  )
}

export default CartItem

CartItem.propTypes = {
  data: propTypes.object,
}.isRquired
