import React from 'react'
import './header.css'
import logoImg from '../../assets/logo.png'
import {FaSun,FaMoon} from 'react-icons/fa'
const Header = ({myTheme,toggleTheme,onSwitch}) => {
  return (
    <header data-theme={myTheme}>
    <div className='container --flex-between'>
    <div className="logo">
      <img src={logoImg} alt="img" width={170}/>
    </div>
    <nav>
    <ul className='--flex-between --list-style-none '>
      <li className='--mx2'><a href="#">Home</a></li>
      <li className='--mx2'><a href="#">About</a></li>
    </ul>  
    </nav>
    <div onClick={toggleTheme} className="toggle">
      <span className='toggle-btn'>
      <FaMoon color='#333' size={16}/>
      <FaSun color='yellow' size={16}/>
      <div className={onSwitch?'ball moved':'ball'}></div>
      </span>
    </div>
    </div>
    </header>
  )
}

export default Header