import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

import RedirectButton from "@components/common/RedirectButton";

const Navbar: React.FC = ()=> {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between p-4 md:p-6 mx-auto">
          <div className="text-white text-2xl font-bold">LOUVER <span className="font-light">SPORT</span></div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            <div className="space-x-6 flex items-center backdrop-blur-md rounded-full p-5">
              <a href="#" className="text-base font-normal text-white hover:underline">About Us</a>
              <a href="#" className="text-base font-normal text-white hover:underline">Facilities</a>
              <a href="#" className="text-base font-normal text-white hover:underline">Membership</a>
            </div>
            <div className="flex justify-center border border-white items-center gap-4 p-5 backdrop-blur-md text-white rounded-full">
              <input type="text" placeholder="Search here..." className="w-32 text-base font-normal outline-none" />
              <div>
                <Search />
              </div>
            </div>
            <RedirectButton dark={true} title="Book now"/>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden bg-white absolute w-40 right-4 mt-2 rounded shadow">
            <a className="block text-base font-normal text-black px-4 py-2 hover:bg-black">About Us</a>
            <a className="block text-base font-normal text-black px-4 py-2 hover:bg-gray-100">Facilities</a>
            <a className="block text-base font-normal text-black px-4 py-2 hover:bg-gray-100">Membership</a>
          </div>
        )}
      </header>
  );
};

export default Navbar;
