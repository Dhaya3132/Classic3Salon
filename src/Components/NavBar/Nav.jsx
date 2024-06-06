import React from 'react'
import { AiOutlineAlignRight } from "react-icons/ai";
import 'tailwindcss/tailwind.css';
import { useState } from 'react';


function Nav() {
    
    return (
        <>
            <div className='flex items-center'>
                <ul className="flex gap-5 text-lg font-normal text-white Mobile-S:hidden Mobile-M:hidden Mobile-L:hidden">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                </ul>
                <AiOutlineAlignRight className='text-white hidden Mobile-S:block Mobile-S:text-white Mobile-M:block Mobile-L:block' size="25px"  />
            </div>
            <div className='hidden'>
                <ul className="flex gap-5 text-lg font-normal text-white">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                </ul>
            </div>
        </>

    )
}

export default Nav;
