import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between w-full">
      <Link to="/" className="flex items-center text-white">
        <img className="w-10" src="logo-img.png" alt="colorful logo" />
        CostaWebDev
      </Link>
    </div>
  );
};

export default Navbar;
