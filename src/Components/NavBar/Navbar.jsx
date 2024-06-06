import Logo from "../Logo";
import Nav from "./Nav";

function Navbar() {
    return (
        <div className="flex items-center justify-around p-3 Mobile-S:w-full Mobile-S:justify-between Mobile-M:w-full Mobile-M:justify-between Mobile-L:justify-between">
            <Logo />
            <Nav />
        </div>
    )
}

export default Navbar;