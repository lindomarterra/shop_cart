import ButtonCart from "./buttonCart"
import SearchBar from "./searchBar"

const Header = () => {
  return (
    <header style={{backgroundColor:'#ffc157'}} className="shadow-lg d-flex justify-content-between align-items-center px-3 py-1 " >
        <SearchBar/> 
        <ButtonCart/>
    </header>
  )
}

export default Header
 