import React from 'react';
import { Button } from '../Button';

function HeadLine() {
    return (
        <div className="flex flex-col justify-start">
            <h2 className="text-black font-light font-Poppins text-7xl">Best Shop in <span className="font-normal font-DancingScript text-8xl text-green-500 border-solid border-b-4 border-green-500">Town</span></h2>
            <h2 className="font-Poppins text-black">Get your perfect style with us</h2>
            <Button>Book an appointment</Button>
        </div>
    )
}

export default HeadLine;