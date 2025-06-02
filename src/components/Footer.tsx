import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Copyright */}
          <p className="text-sm">
            Made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://luifereduardoo.com"
              className="font-semibold text-white hover:text-indigo-300 transition-colors"
            >
              Luifer Ortega
            </a>
          </p>

          {/* Legal Links - Versión compacta */}
          <div className="flex items-center space-x-3 text-xs">
            <Link 
              to="/terms" 
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-500">•</span>
            <Link 
              to="/privacy-policy" 
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;