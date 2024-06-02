import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


function Customer() {

  const [onEntering, setEntering] = useState();

  return (
    <div className='flex justify-center items-center font-Poppins gap-32'>
      <ScrollTrigger onEnter={() => setEntering(true)} onExit={() => setEntering(false)}>
        <div className='text-center'>
          <h5 className='font-semibold text-Green text-6xl'>
            {onEntering && <CountUp start={3000} end={4000} delay={0} duration={5} />}+
          </h5>
          <p className='font-medium text-gray-500 text-3xl'>Customer</p>
        </div>
      </ScrollTrigger>

      <div className='text-center'>
        <h5 className='font-semibold text-Green text-6xl'>2023</h5>
        <p className='font-medium text-gray-500 text-3xl'>Best Beauty Salon</p>
      </div>
      <ScrollTrigger onEnter={() => setEntering(true)} onExit={() => setEntering(false)}>
        <div className='text-center'>
          <h5 className='font-semibold text-Green text-6xl'>
            {onEntering && <CountUp start={2000} end={3750} delay={0} duration={5} />}+
          </h5>
          <p className='font-medium text-gray-500 text-3xl'>Happy Customer</p>
        </div>
      </ScrollTrigger>


    </div>
  )
}

export default Customer;