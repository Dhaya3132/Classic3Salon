import { MovingText } from "../MovingText"
export function About() {
    return (
        <div>
            <MovingText></MovingText>
            <div className="mt-14 flex flex-col justify-center items-center">
                <h4 className="font-Poppins font-semibold text-white text-6xl border-double border-b-4 border-green-500">Who we are</h4>
                <h2 className="font-Poppins font-thin text-white text-4xl w-3/5 mt-5 p-1">We are a 2022 startup with more than 4000+ clients and over 3500+ happy consumers within two years. We provide solutions to both men and women.</h2>
            </div>
        </div>
    )
}