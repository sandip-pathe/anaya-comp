import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about", hasDropdown: false },
    { name: "Blog", path: "/blog", hasDropdown: false },
    { name: "Developers", path: "/developer", hasDropdown: false },
  ];

  return (
    <>
      {/* Banner - slides under navbar when scrolling */}
      <div
        className={`fixed w-full bg-[#1A1C25] border-b border-anaya-border text-anaya-muted text-[9px] sm:text-[11px] font-medium py-2 text-center px-2 sm:px-4 tracking-wide uppercase transition-all duration-200 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ zIndex: 30 }}
      >
        <span className="text-anaya-blue font-bold mr-1 sm:mr-2">New</span>
        <span className="hidden sm:inline">
          RBI announces OMO Purchase of Government of India Securities
        </span>
        <span className="inline sm:hidden">RBI OMO Purchase Announcement</span>
        <a
          href="https://rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=62043"
          target="_blank"
          rel="noopener noreferrer"
          className="text-anaya-blue font-bold ml-2 sm:ml-8"
        >
          Read More &rarr;
        </a>
      </div>

      {/* Navbar - stacks on top of banner */}
      <nav
        className={`fixed w-full transition-all duration-200 border-b ${
          isScrolled
            ? "top-0 bg-anaya-dark/98 backdrop-blur-md border-anaya-border py-3 shadow-lg"
            : "top-[36px] bg-anaya-dark/80 backdrop-blur-sm border-transparent py-4"
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <img src="/logo2.png" alt="Anaya Logo" width={28} height={28} />
              <span className="font-semibold text-2xl tracking-tight text-white">
                Anaya
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group relative cursor-pointer flex items-center gap-1 text-[13px] font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors px-3 py-2">
                Sign in
              </button>
              <Link
                to="/subscribe"
                className="bg-anaya-blue text-white px-4 py-2 rounded-[6px] text-[13px] font-medium hover:bg-anaya-bluehover transition-colors shadow-sm shadow-blue-900/20"
              >
                Request Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-anaya-dark border-t border-anaya-border absolute w-full h-screen left-0 top-full p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-200 border-b border-white/5 pb-3"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <button className="w-full py-2.5 text-center rounded-md border border-anaya-border text-sm font-medium">
                  Sign in
                </button>
                <Link
                  to="/subscribe"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center rounded-md bg-anaya-blue text-white text-sm font-medium"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
