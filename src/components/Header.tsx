import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change background after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    if (isProductsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductsOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#1a3a5c] shadow-lg" 
          : "bg-[#1a3a5c]/60"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Brookwell Industries Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-white hover:text-[#e2b13c] transition-colors font-medium ${
                isActive("/") ? "text-[#e2b13c]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`text-white hover:text-[#e2b13c] transition-colors font-medium ${
                isActive("/about-us") ? "text-[#e2b13c]" : ""
              }`}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div className="relative flex items-center" ref={dropdownRef}>
              <Link
                to="/our-products"
                className={`text-white hover:text-[#e2b13c] transition-colors font-medium ${
                  isActive("/our-products") ? "text-[#e2b13c]" : ""
                }`}
              >
                Our Products
              </Link>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="ml-1 text-white hover:text-[#e2b13c] transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[180px]">
                  <Link
                    to="/thrie-beam"
                    onClick={() => setIsProductsOpen(false)}
                    className="block px-4 py-2 hover:bg-[#e2b13c]/10 text-gray-800 hover:text-[#e2b13c] transition-colors"
                  >
                    Thrie-Beam
                  </Link>
                  <Link
                    to="/w-beam"
                    onClick={() => setIsProductsOpen(false)}
                    className="block px-4 py-2 hover:bg-[#e2b13c]/10 text-gray-800 hover:text-[#e2b13c] transition-colors"
                  >
                    W-Beam
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact-us"
              className={`text-white hover:text-[#e2b13c] transition-colors font-medium ${
                isActive("/contact-us") ? "text-[#e2b13c]" : ""
              }`}
            >
              Contact Us
            </Link>

            <Link to="/inquiry">
              <button className="bg-[#f27127] hover:bg-[#d96520] text-white font-semibold px-6 py-2 rounded transition-colors">
                Inquiry
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#e2b13c] transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#e2b13c] transition-colors font-medium"
              >
                About Us
              </Link>
              <div className="flex items-center justify-between">
                <Link
                  to="/our-products"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-[#e2b13c] transition-colors font-medium"
                >
                  Our Products
                </Link>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="text-white hover:text-[#e2b13c] transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              {isProductsOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    to="/thrie-beam"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/80 hover:text-[#e2b13c] transition-colors"
                  >
                    Thrie-Beam
                  </Link>
                  <Link
                    to="/w-beam"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/80 hover:text-[#e2b13c] transition-colors"
                  >
                    W-Beam
                  </Link>
                </div>
              )}
              <Link
                to="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#e2b13c] transition-colors font-medium"
              >
                Contact Us
              </Link>
              <Link
                to="/inquiry"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className="w-full bg-[#f27127] hover:bg-[#d96520] text-white font-semibold px-6 py-2 rounded transition-colors">
                  Inquiry
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;