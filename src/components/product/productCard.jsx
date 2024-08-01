import propTypes from 'prop-types'
import formatCurrency from '../../util/formatCurrency'
import { BsCartPlus } from 'react-icons/bs'
import './productCard.css'
import { useContext } from 'react'
import AppContext from '../../context/appContext'

const ProductCard = ({ data }) => {

  const { title, price, thumbnail } = data

  const {cartItem, setCartItem}=useContext(AppContext)
  
  const handleAddCart= ()=> setCartItem([...cartItem, data])


  return (
    <div      
      style={{ boxShadow: '1px 1px 8px #222', cursor:'pointer' }}
      className="position-relative card_div "
    >
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="img_prod"
        className="w-100"
      />
      <div style={{ backgroundColor: '#ebebeb' }} className="text-center p-2 ">
        <p style={{ fontSize: '14px' }} className="fw-lighter">
          {title}
        </p>
        <p className="fs-6 fw-bold"> {formatCurrency(price, 'EUR')} </p>
      </div>
      <button
        onClick={handleAddCart}
        style={{ transition: 'all 600ms linear' }}
        className="btn btn-outline-success border-0 rounded-5 px-3 py-3 position-absolute top-0 end-0"
      >
        <BsCartPlus className="fs-4" />
      </button>
    </div>
  )
}

export default ProductCard
ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired
