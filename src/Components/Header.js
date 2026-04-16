import React from "react";
import { Search, BadgePercent, HelpCircle } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="w-[100vw] border-b border-gray-200 sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-3 font-semibold text-lg">
            <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path d="M7 2v20" />
                <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
              </svg>
            </div>
            <span className="text-gray-800 font-bold">FoodHub</span>
          </Link>

          {/* RIGHT: Icons */}
          <div className="flex items-center gap-6">
            {/* CENTER: Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
              <a
                href="/search"
                className="flex items-center gap-2 hover:text-black transition hover:text-orange-500"
              >
                <Search size={18} />
                <span>Search</span>
              </a>

              <a
                href="/offers"
                className="flex items-center gap-2 hover:text-black transition hover:text-orange-500"
              >
                <BadgePercent size={18} />
                <span>Offers</span>
              </a>

              <a
                href="/help"
                className="flex items-center gap-2 hover:text-black transition hover:text-orange-500"
              >
                <HelpCircle size={18} />
                <span>Help</span>
              </a>
            </nav>

            {/* Profile */}
            <Link to="/auth/login">
              <div className="cursor-pointer hover:text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M20 21a8 8 0 1 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </Link>

            {/* Cart */}
            <div className="relative cursor-pointer hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.4 12.49a2 2 0 0 0 2 1.51h9.72a2 2 0 0 0 2-1.64l1.38-7.36H5.12" />
              </svg>

              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
