import React, { useEffect, useState } from "react";
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "Products", link: "#products" },
    { id: 3, name: "Categories", link: "#categories" },
    { id: 4, name: "Offers", link: "#offers" },
    { id: 5, name: "About", link: "#about" },
    { id: 6, name: "Contact", link: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className={`w-full bg-[#59745f] py-3`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Logo - Left */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="text-2xl font-light text-white">
                ShopEase
              </a>
            </div>

            {/* Nav Menu - Center */}
            <nav className="hidden lg:flex justify-center flex-1">
              <ul className="flex flex-wrap gap-6 text-sm font-bold text-white">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="hover:text-green-200 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Search - Right of Menu */}
            <div className="hidden lg:block w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                  aria-label="Search"
                >
                  <FiSearch size={18} />
                </button>
              </div>
            </div>

            {/* Icons - Far Right */}
            <div className="flex items-center space-x-4 text-white">
              <button
                className="relative p-1 hover:text-pink-400"
                aria-label="Wishlist"
              >
                <FiHeart size={20} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                className="relative p-1 hover:text-pink-400"
                aria-label="Cart"
              >
                <FiShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  5
                </span>
              </button>
              <button className="p-1 hover:text-pink-400" aria-label="Account">
                <FiUser size={20} />
              </button>

              {/* Mobile menu toggle */}
              <div className="lg:hidden">
                <button
                  className="ml-2 text-white hover:text-gray-300"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  <FiMenu size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-3 bg-white rounded-lg shadow-md p-4 space-y-2 text-[#59745f] text-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="block hover:text-green-700 font-normal"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#59745f]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
