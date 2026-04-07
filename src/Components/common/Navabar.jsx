import logo from "../../assets/logo.jpg";
import { Search, Heart, ShoppingCart } from "lucide-react";

const Navabar = () => {
  return (
    <header className="w-full bg-white shadow-sm px-6 fixed top-0 left-0 right-0 h-[80px] z-50">
      <nav className="flex items-center justify-between h-full">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            className="w-20 h-20 object-cover rounded-md"
            src={logo}
            alt="logo"
          />
        </a>

        {/* Search Bar */}
        <div className="w-[40%] hidden md:flex">
          <div className="flex w-full border rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="w-full px-4 py-2 outline-none bg-white"
            />
            <button className="bg-blue-500 px-4 flex items-center justify-center">
              <Search className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="relative">
            <Heart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </button>

          <button className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navabar;
