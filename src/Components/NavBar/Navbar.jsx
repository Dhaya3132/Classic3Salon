import Logo from "../Logo";
import Nav from "./Nav";

function Navbar() {
    return (
        <div className="flex items-center justify-around p-3 Mobile-S:w-full">
            <Logo />
            <Nav />
        </div>
    )
}

export default Navbar;