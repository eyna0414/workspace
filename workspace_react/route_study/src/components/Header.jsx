import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (

    <div className='header'>
      <div>게시판</div>
      <div>
        <span>
          <Link to={'/login'}>LOGIN</Link> 
        </span>
        <span>
          <Link to={'/join'}>JOIN</Link>
        </span>
      </div>
    </div>
  )
}


export default Header