import React from 'react'
import { FeedBack } from '../DataComponents/Servicedata'
import Feed from './Feed';

function Customers() {
    return (
        <div className='mt-10 pt-5 pb-10 Mobile-S:mt-3'>

            <h2 className='font-poppins text-5xl font-semibold text-center text-black p-5 Mobile-S:text-4xl'>See What Others are Saying</h2>
            <ul className='flex justify-center items-center flex-wrap gap-5 mt-7 Mobile-S:gap-2'>
                {FeedBack.map((data,index) =>
                    <Feed key={index} {...data}/>
                )}
            </ul>

        </div>

    )
}

export default Customers