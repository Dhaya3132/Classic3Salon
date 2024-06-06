import React from 'react';
import Button from '../Button';
function HeadLine() {
    return (
        <div className="flex flex-col">
            <h2 className="text-white font-light font-Poppins text-8xl Mobile-S:w-full
            Mobile-S:text-7xl">Best Shop in <span className="font-normal font-DancingScript text-8xl text-green-500 border-solid border-b-4 border-green-500 Mobile-S:text-7xl">Town</span></h2>
            <div className="flex justify-end flex-col items-end mt-8 
            Mobile-S:justify-start Mobile-S:items-start 
            Mobile-M:justify-start Mobile-M:items-start
            Mobile-L:justify-start Mobile-L:items-start">
                <h2 className="font-Poppins text-white text-2xl Mobile-S:w-full Mobile-S:text-lg">Get your perfect style with us</h2>
                <Button>Book an appointment</Button>
            </div>
        </div>
    )
}

export default HeadLine;