import Customer from "./Customer"
export function About() {
    return (
        <>
            <div className="mt-14 flex flex-col justify-start items-start p-20 Mobile-S:p-3 Mobile-M:p-3 Mobile-L:p-2">
                <h4 className="font-Poppins font-medium text-black text-8xl Mobile-S:text-5xl Mobile-M:text-5xl Mobile-L:text-5xl">Who we are</h4>
                <h2 className="font-Poppins font-light text-gray-500 text-6xl mt-5 p-1 Mobile-S:text-3xl Mobile-M:text-3xl Mobile-L:text-3xl">We are a 2022 startup with more than 4000+ clients and over 3500+ happy consumers within two years. We provide solutions to both men and women.</h2>
            </div>
            <Customer />
        </>
    )
}