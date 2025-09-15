"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { REGISTRATION_LINK } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ get current route

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/committees", label: "Committees" },
    { href: "/pricing", label: "Pricing" },
    { href: "/team", label: "Meet the Team" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <h1 className="text-xl font-bold text-gray-900">HUMUN</h1>
              <p className="text-xs italic text-gray-500 -mt-1">Eighth Edition</p>
            </div>
            {/* <h1 className="text-xl font-bold text-gray-900">HUMUN</h1> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary-600"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/register" target="blank">
              <button className="bg-gradient-to-r from-primary-800 to-primary-700 text-white px-4 py-2 rounded-lg font-medium hover:from-yellow-700 hover:to-yellow-900 transition-all transform hover:scale-105 cursor-pointer">
                Register Now
              </button>
            </Link>  
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    pathname === link.href
                      ? "text-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  }`}
                  onClick={() => setIsOpen(false)} // ✅ close menu on click
                >
                  {link.label}
                </Link>
              ))}
              <Link href={REGISTRATION_LINK} target="blank" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-2 bg-primary-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-800 transition-colors">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
