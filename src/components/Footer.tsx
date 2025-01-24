import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 flex justify-center items-center">
      <p className="text-sm">
        Made with by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://luifereduardoo.com"
          className="font-semibold text-white"
        >
          Luifer Ortega
        </a>
      </p>
    </footer>
  );
};

export default Footer;
