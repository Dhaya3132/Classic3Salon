import Customer from "./Customer"
export function About() {
    return (
        <>
            <div className="mt-14 flex flex-col justify-start items-start p-20">
                <h4 className="font-Poppins font-medium text-white text-8xl border-solid border-b-4 border-green-500">Who we are</h4>
                <h2 className="font-Poppins font-light text-gray-500 text-6xl mt-5 p-1">We are a 2022 startup with more than 4000+ clients and over 3500+ happy consumers within two years. We provide solutions to both men and women.</h2>
            </div>
            <Customer />
        </>
    )
}