import React, { useContext } from 'react'
import './header.css'
import { Link, NavLink } from "react-router-dom";
import CountContext from '../../context/countContext';

const Header = () => {
  const {count} = useContext(CountContext)
  return (
    <div className="--flex-center --p2 --bg-primary">
        <nav>
          {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link> */}
          <NavLink to="/" className={({isActive})=>isActive?'active': ''}>Home</NavLink>
          <NavLink to="/todoList">Todo List</NavLink>
          <NavLink to="/cart">Cart ({count})</NavLink>
        </nav>
      </div>
  )
}

export default Header