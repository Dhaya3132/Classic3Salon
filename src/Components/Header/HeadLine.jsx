import React from 'react';
import { Button } from '../Button';

function HeadLine() {
    return (
        <div className="flex flex-col">
            <h2 className="text-black font-light font-Poppins text-8xl">Best Shop in <span className="font-normal font-DancingScript text-8xl text-green-500 border-solid border-b-4 border-green-500">Town</span></h2>
            <div className="flex justify-end flex-col items-end mt-8">
                <h2 className="font-Poppins text-black text-2xl">Get your perfect style with us</h2>
                <Button>Book an appointment</Button>
            </div>
        </div>
    )
}

export default HeadLine;