export function Navbar() {
    return (
        <div className="flex items-center justify-around p-3">
            <div>
                <h2 className="font-DancingScript font-semibold text-4xl text-white">Classic<span className="font-DancingScript font-semibold text-4xl text-green-500">3</span></h2>
                <p className="font-Poppins font-light text-white">Family Salon</p>
            </div>
            <div>
                <ul className="flex gap-5 text-base font-light text-white">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>

    )
}