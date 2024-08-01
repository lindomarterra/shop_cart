import { FaCopyright } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: '#ffc157' }}
      className="text-center"
    >
      <h2 style={{ textShadow: '1px 1px 2px #222' }} className="fw-bolder p-2">
        FOOTER
      </h2>
      <p className='mt-5 p-2' >
        <FaCopyright className="me-1 bg-transparent fs-5" />
        <span style={{ fontWeight: 'lighter' }}>copyright</span>
      </p>
    </footer>
  )
}

export default Footer
