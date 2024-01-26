import React from 'react';
import { Link } from 'react-router-dom'

//Navabar shows logo, different title & Button for different pages using props.
const Navbar = (props) => {

  return (
    <>
    <div className='navbar'>
      <h2>
        <span className='brand-first-half'>{props.title}</span>
      </h2>
      <Link to={props.path}><button className= "btn btn-outline-success mx-1 my-1 navbar-toggler">{props.page}</button></Link>
    </div>
    </>
  )
}

export default Navbar
