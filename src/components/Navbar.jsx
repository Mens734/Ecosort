import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown, Leaf } from "lucide-react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-[#EDE6DD] relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LEFT - MENU BUTTON (Mobile) */}
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <Menu size={24} />
        </button>

        {/* LEFT - DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-black text-gray-700">
            Home
          </Link>

          {/* DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="hover:text-black text-gray-700 flex items-center gap-1"
            >
              Pages
              <ChevronDown
                size={18}
                className={`text-gray-500 transition-transform mt-1 ${
                  pagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {pagesOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-40 py-2 z-50">
                <Link
                  to="/waste"
                  onClick={() => setPagesOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Waste Items
                </Link>
                
                <Link
                  to="/categories"
                  onClick={() => setPagesOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Categories
                </Link>
                
              </div>
            )}
          </div>

          <Link to="/tips" className="hover:text-black text-gray-700">
            Tips
          </Link>
          <Link to="/about" className="hover:text-black text-gray-700">
            About
          </Link>
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-lg md:text-xl font-bold flex ">
            <Leaf className="text-green-600 mt-1" />
            <span>EcoSort</span>
          </h1>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40">
          <div className="bg-white w-64 h-full p-6 shadow-lg">
            {/* CLOSE BUTTON */}
            <button onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>

            {/* LINKS */}
            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => {
                  setPagesOpen(false);
                  setMenuOpen(false);
                }}
                className="text-gray-700"
              >
                Home
              </Link>

              {/* MOBILE DROPDOWN */}
              <div>
                <button
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className="text-gray-700"
                >
                  Pages
                </button>

                {pagesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link
                      to="/waste"
                      onClick={() => {
                        setPagesOpen(false);
                        setMenuOpen(false);
                      }}
                      className="text-gray-700"
                    >
                      Waste Items
                    </Link>
                    
                    <Link
                      to="/categories"
                      onClick={() => {
                        setPagesOpen(false);
                        setMenuOpen(false);
                      }}
                      className="text-gray-700"
                    >
                      Categories
                    </Link>
                    <Link
                      to="/favorites"
                      onClick={() => {
                        setPagesOpen(false);
                        setMenuOpen(false);
                      }}
                      className="text-gray-700"
                    >
                      Favorites
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/tips" className="text-gray-700">
                Tips
              </Link>
              <Link to="/about" className="text-gray-700">
                About
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
