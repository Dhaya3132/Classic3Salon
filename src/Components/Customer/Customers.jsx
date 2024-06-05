import React from 'react'
import { FeedBack } from '../DataComponents/Servicedata'
import Feed from './Feed';

function Customers() {
    return (
        <div className='mt-10'>

            <h2 className='font-poppins text-5xl font-semibold text-center m-auto text-white p-5'>See What Others are Saying</h2>
            <ul className='flex justify-center items-center flex-wrap gap-5 mt-7'>
                {FeedBack.map((data,index) =>
                    <Feed key={index} {...data}/>
                )}
            </ul>

        </div>

    )
}

export default Customers