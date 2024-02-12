import React from 'react'
import './footer.css'

const Footer = ({myTheme}) => {
  return (
    <>
      <footer data-theme={myTheme} className='--flex-center'>
        <p>Copyright &copy; 2024</p>
      </footer>
    </>
  )
}

export default Footer