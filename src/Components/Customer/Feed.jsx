import React from 'react'

function Feed ({Para}) {
    return (
    <li className='bg-white border-solid border-2 border-slate-200 rounded-md w-72 h-24 font-Poppins text-center p-3 shadow-md'>
        <h4 className='w-64 '>{Para}</h4>
    </li>
)
}
export default Feed;