import React from 'react'
import Button from '../Button';

function Service() {
  return (
    <div className='bg-Grey mt-20 h-80 p-20'>
        <h2 className="font-Poppins font-medium text-black text-5xl">Services</h2>
        <div className='flex gap-5'>
           <Button>Men</Button>
           <Button>Women</Button>
        </div>
    </div>
  )
}

export default Service;