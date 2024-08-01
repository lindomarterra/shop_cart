import fetchProducts from '../api/fetchProducts'
import ProductCard from '../components/product/productCard'
import { FaCloudArrowUp } from 'react-icons/fa6'
import Loading from '../components/loading/loading'
import { useContext, useEffect } from 'react'
import AppContext from '../context/appContext'

const Products = () => {
  const { products, setProducts, loading, setLoading } = useContext(AppContext)

  useEffect(() => {
    fetchProducts('produtos').then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [])

  return (
    (loading && <Loading />) || (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}
        className="p-3 position-relative"
      >
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
        <a
          href="#"
          target="_top"
          className="position-fixed btn btn-outline-secondary border-0 bottom-0 end-0"
        >
          <FaCloudArrowUp className="fs-2" />
        </a>
      </div>
    )
  )
}

export default Products
