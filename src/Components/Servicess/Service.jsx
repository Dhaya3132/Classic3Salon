import React, { useState } from 'react'
import Button from '../Button';
import { Service_Data } from '../DataComponents/Servicedata';
import {Service_Women_Data} from '../DataComponents/Servicedata'
import Components_List from './Components';

function Service() {

  const [data, setdata] = useState([]);
  const men = () => {
    setdata(Service_Data);
  }
  const women = () =>{
    setdata(Service_Women_Data);
  }

  return (
    <div className='bg-gradient-to-r from-Ligth to-LightPro to-50% mt-20  p-20 Mobile-S:p-5 Mobile-S:mt-10 Mobile-M:p-5 Mobile-M:mt-10 Mobile-L:p-5 Mobile-L:mt-10'>
      <h2 className="font-Poppins font-medium text-black text-5xl">Services</h2>
      <div className='flex gap-5'>
        <Button onClick={men}>Men</Button>
        <Button onClick={women}>Women</Button>
      </div>
      <ul className='flex justify-start gap-10 mt-5 Mobile-S:flex-col Mobile-S:gap-5 Mobile-M:flex-col Mobile-M:gap-5 Mobile-L:flex-col Mobile-L:gap-5'>
        {data.map((items,index) => <Components_List key={index} {...items} />)}
      </ul>
    </div>
  )
}

export default Service;