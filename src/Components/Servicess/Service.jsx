import React, { useState } from 'react'
import Button from '../Button';
import { Service_Data } from '../../DataComponents/Servicedata';
import Components_List from './Components';

function Service() {

  const [data, setdata] = useState([]);
  const men = () => {
    setdata(Service_Data);
    console.log('clicked');
  }
  const women = () =>{
    setdata(Service_Data);
  }

  return (
    <div className='bg-Grey mt-20  p-20'>
      <h2 className="font-Poppins font-medium text-black text-5xl">Services</h2>
      <div className='flex gap-5'>
        <Button onClick={men}>Men</Button>
        <Button onClick={women}>Women</Button>
      </div>
      <ul className='flex justify-start gap-10 mt-5'>
        {data.map((items,index) => <Components_List key={index} {...items} />)}
      </ul>
    </div>
  )
}

export default Service;