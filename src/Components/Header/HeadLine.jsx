import React from 'react';
import Button from '../Button';
function HeadLine() {
    return (
        <div className="flex flex-col">

            <h2
            className="text-white font-light font-Poppins text-6xl 
            Mobile-S:text-3xl Mobile-S:w-full Mobile-S:text-center 
            Mobile-M:text-4xl Mobile-M:w-full Mobile-M:text-center Mobile-M:p-3
            Mobile-L:text-4xl Mobile-L:w-full Mobile-L:text-center Mobile-L:p-1"> Elevate your<span className="font-normal font-DancingScript text-8xl text-Green Mobile-S:text-4xl Mobile-M:text-4xl Mobile-L:text-4xl">Salon</span>Experience</h2>

            <div className="flex justify-end flex-col items-end mt-8 
            Mobile-S:justify-center Mobile-S:items-center Mobile-S:mt-2
            Mobile-M:justify-center Mobile-M:items-center Mobile-M:mt-2
            Mobile-L:justify-center Mobile-L:items-center Mobile-L:mt-3">
                <h2 className="font-Poppins text-white font-normal text-2xl 
                Mobile-S:w-full Mobile-S:text-base Mobile-S:text-Grey Mobile-S:text-center 
                Mobile-M:w-full Mobile-M:text-base Mobile-M:text-Grey Mobile-M:text-center
                Mobile-L:w-full Mobile-L:text-base Mobile-L:text-Grey Mobile-L:text-center">Get your perfect style with us</h2>
                <Button>Book an appointment</Button>
            </div>

        </div>
    )
}

export default HeadLine;