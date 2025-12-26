import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '@/assets/images/header/logo.svg';
import { IoMenuSharp, IoClose } from 'react-icons/io5';

import useScrollPosition from '@/hook/useScrollPosition';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <header className=""
    <header
      className={`sticky top-0 left-0 z-50 w-full bg-[#F8F8FD] transition-shadow duration-300 ${
        isScrolled ? 'border-b border-gray-200' : ''
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        {/* Logo and Menu */}
        <div className="flex items-center gap-10">
          <Link to="/" className="flex cursor-pointer items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-slate-600/20">
              <img
                src={navLogo}
                loading="lazy"
                alt="Logo"
                className="h-8 w-8 object-cover"
              />
            </div>
            <span className="text-left font-redHatDisplay text-2xl leading-9 font-bold tracking-[-0.01em]">
              JobHuntly
            </span>
          </Link>
          {/* Desktop Navigation Links */}
          <ul className="mt-1 hidden items-center md:flex">
            <li className="h-full leading-8">
              <NavLink to="/find-jobs" className="nav-link">
                Find Jobs
              </NavLink>
            </li>
            <li className="h-full leading-8">
              <NavLink to="/companies" className="nav-link">
                Browse Companies
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden items-center gap-5 md:flex">
          <button
            className="shrink-0 rounded-md px-4 py-[10px] text-center font-semibold text-primaryColor transition duration-300 hover:bg-primaryColor/10"
            type="button"
          >
            Login
          </button>
          <button className="primary-btn shrink-0" type="button">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-[#5533ff13] text-base shadow-[0px_0px_5px_#5533ff04_inset] transition duration-300 active:border-primaryColor/70 md:hidden"
          onClick={toggleMenu}
          type="button"
        >
          {isMenuOpen ? (
            <IoClose size={20} className="opacity-70 hover:opacity-100" />
          ) : (
            <IoMenuSharp size={20} className="opacity-70 hover:opacity-100" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="bg-[#F8F8FD] shadow-2xl transition duration-300 md:hidden">
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <NavLink
                to="/find-jobs"
                className="nav-link"
                onClick={toggleMenu}
              >
                Find Jobs
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="/companies"
                className="nav-link"
                onClick={toggleMenu}
              >
                Browse Companies
              </NavLink>
            </li>
            <li className="py-2">
              <button
                className="w-full rounded-md px-4 py-2 font-semibold text-primaryColor transition duration-300 hover:bg-primaryColor/10"
                type="button"
              >
                Login
              </button>
            </li>
            <li className="py-2">
              <button className="primary-btn w-full" type="button">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
