import { BiLoaderCircle } from 'react-icons/bi'

const Loading = () => {
    
  return (
    <div
      style={{
        minHeight: '95vh',
        paddingTop: '250px',
        fontSize: '75px',
      }}
      className="d-flex justify-content-center"
    >
      <BiLoaderCircle className='spinner_loading' />
    </div>
  )
}

export default Loading
