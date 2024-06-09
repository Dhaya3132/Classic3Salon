import React from 'react'
import Logo from '../Logo'
import Nav from '../NavBar/Nav'

function Footer() {
  return (
    <div className='p-10 flex justify-between items-center bg-Green rounded-tl-3xl rounded-tr-3xl'>
        <Logo></Logo>
        <Nav></Nav>
        <div>
          <h4 className='text-white'>Contact Us : +91 00012 12345</h4>
        </div>
    </div>
  )
}

export default Footer