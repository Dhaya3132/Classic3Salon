import React from 'react';

function Components_List({title, description}) {
  return (
    <li className='border-solid border-2 border-slate-300 w-54 rounded-lg p-7'>
        <h3 className='text-black font-Poppins font-semibold text-xl'>{title}</h3>
        <p className='text-black font-Poppins font-light text-lg'>{description}</p>
    </li>
  )
}

export default Components_List;