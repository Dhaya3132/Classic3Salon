import { Button } from "./Button"
export function Head() {
    return (
        <div className="flex justify-center items-center gap-28 p-14">
            <div className="flex flex-col justify-start">
                <h2 className="text-white font-light font-Poppins text-7xl">Best Shop in <span className="font-normal font-DancingScript text-8xl text-green-500 border-solid border-b-4 border-green-500">Town</span></h2>
                <Button>Book an appointment</Button>
            </div>
            <div>
                <img src=".\src\assets\aarx0g3at.png" className="w-96 h-96"/>
            </div>
        </div>
    )
}