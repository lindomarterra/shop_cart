import { useContext, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/appContext'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const { setLoading, setProducts } = useContext(AppContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    const products = await fetchProducts(searchValue)
    setProducts(products)
    setLoading(false)
    setSearchValue('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ height: '35px' }} className="d-flex">
      <input
        onChange={({ target }) => setSearchValue(target.value)}
        value={searchValue}
        type="search"
        placeholder="search"
        className="form-control me-2 text-black-50 "
      />
      <button
        style={{ height: '35px' }}
        className="btn btn-outline-danger d-flex justify-content-center align-self-center"
      >
        <CiSearch className="fs-4 " />
      </button>
    </form>
  )
}

export default SearchBar
