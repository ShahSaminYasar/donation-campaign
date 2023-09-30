import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "../../Assets/images/Logo.png"

const Header = () => {
    return (
        <div className="max-w-6xl gap-3 mx-auto py-5 px-3 flex flex-row justify-between items-center">
            <Link to="/" className="text-3xl font-semibold text-neutral-950">
                <img src={Logo} alt="" className="w-44 sm:w-48 md:w-56" />
            </Link>
            <Navbar />
        </div>
    );
};

export default Header;