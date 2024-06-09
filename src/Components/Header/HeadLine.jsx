import React from 'react';
import Button from '../Button';
function HeadLine() {
    return (
        <div className="flex flex-col">
            <h2 className="text-white font-light font-Poppins text-6xl Mobile-S:w-full
            Mobile-S:text-7xl"> Elevate your<span className="font-normal font-DancingScript text-8xl text-Green Mobile-S:text-7xl">Salon</span>Experience</h2>
            <div className="flex justify-end flex-col items-end mt-8 
            Mobile-S:justify-start Mobile-S:items-start 
            Mobile-M:justify-start Mobile-M:items-start
            Mobile-L:justify-start Mobile-L:items-start">
                <h2 className="font-Poppins text-white font-normal text-2xl Mobile-S:w-full Mobile-S:text-lg">Get your perfect style with us</h2>
                <Button>Book an appointment</Button>
            </div>
        </div>
    )
}

export default HeadLine;