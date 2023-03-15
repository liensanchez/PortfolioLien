import React from 'react'
import logo from '../assets/pyramid.png'

function NavBar() {
  return (
    <div>
      <img src={logo} alt="" />
      <h3>Projects</h3>
      <h3>Skills</h3>
      <h3>About Me</h3>
      <h3>Contact</h3>
    </div>
  )
}

export default NavBar