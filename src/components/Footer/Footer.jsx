import { Link } from "react-router-dom";
import footerLogo from "../../assets/navImg.png";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-10">
        {/* Company Info */}
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={footerLogo}
            alt="LLuxe Living"
            className="w-28 h-auto object-contain"
          />
          <Link
            to="/"
            className="text-2xl font-bold text-white tracking-wide leading-tight"
          >
            LLuxe<span className="text-gray-300">Living</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="hover:text-white transition">
                Price Calculator
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/form" className="hover:text-white transition">
                Form
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-medium text-white">Contact</h3>
          <div className="mt-4 text-sm space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <Phone size={18} /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} /> contact@interiordesign.com
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 py-4 border-t border-gray-800 text-sm">
        © {new Date().getFullYear()} LLuxe Living. All rights reserved.
      </div>
    </footer>
  );
}
