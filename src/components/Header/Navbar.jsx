import { NavLink } from "react-router-dom";

const Navbar = () => {
  const pages = ["Home", "Donation", "Statistics"];

  return (
    <nav className="flex flex-row gap-3 sm:gap-5 text-neutral-700 text-base sm:text-lg md:text-xl font-medium">
      {pages.map((page, index) => (
        <NavLink
          key={index}
          className={({ isActive }) => `${isActive && "text-red-600 underline"}`}
          to={page.toLowerCase() === "home" ? "/" : page.toLowerCase()}
        >
          {page}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
