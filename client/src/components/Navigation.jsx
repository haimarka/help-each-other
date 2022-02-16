import React from 'react'
import {Link} from 'react-router-dom';

export default function 
() {
  return (
    <div>
        <h2>Navigation</h2>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/LogIn'>LogIn</Link>
        <Link to='/Register'>Register</Link>
        <Link to='/Search'>Search</Link>
    </div>
  )
}