import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full p-5 bg-white flex flex-row justify-between align-middle container mx-auto mb-5">
      <img src="src/Resources/Logo.png" alt="" />
      <nav className="flex flex-row justify-center items-center gap-9 text-lg font-semibold text-neutral-900">
        <Link to={"/"}>Home</Link>
        <Link to={"/donation"}>Donation</Link>
        <Link to={"/statistics"}>Statistics</Link>
      </nav>
    </div>
  );
}

export default Header;
