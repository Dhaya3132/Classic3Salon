import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


function Customer() {

  const [onEntering, setEntering] = useState();

  return (
    <div className='flex justify-center items-center font-Poppins gap-32 Mobile-S:gap-5 Mobile-S:items-baseline Mobile-M:gap-5 Mobile-M:items-baseline Mobile-L:gap-5 Mobile-L:items-baseline'>

      <ScrollTrigger onEnter={() => setEntering(true)} onExit={() => setEntering(false)}>
        <div className='text-center'>
          <h5 className='font-semibold text-Green text-6xl Mobile-S:text-xl Mobile-M:text-xl Mobile-L:text-xl'>
            {onEntering && <CountUp start={3000} end={4000} delay={0} duration={5} />}+
          </h5>
          <p className='font-medium text-gray-500 text-3xl Mobile-S:text-base Mobile-M:text-base Mobile-L:text-base'>Customer</p>
        </div>
      </ScrollTrigger>

      <div className='text-center'>
        <h5 className='font-semibold text-Green text-6xl  Mobile-S:text-xl Mobile-M:text-xl Mobile-L:text-xl'>2023</h5>
        <p className='font-medium text-gray-500 text-3xl Mobile-S:text-base Mobile-M:text-base Mobile-L:text-base'>Best Beauty Salon</p>
      </div>

      <ScrollTrigger onEnter={() => setEntering(true)} onExit={() => setEntering(false)}>
        <div className='text-center'>
          <h5 className='font-semibold text-Green text-6xl  Mobile-S:text-xl Mobile-M:text-xl Mobile-L:text-xl'>
            {onEntering && <CountUp start={2000} end={3750} delay={0} duration={5} />}+
          </h5>
          <p className='font-medium text-gray-500 text-3xl Mobile-S:text-base Mobile-M:text-base Mobile-L:text-base'>Happy Customer</p>
        </div>
      </ScrollTrigger>

    </div>
  )
}

export default Customer;