import React from "react";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../../components/Footer";

const Terms: React.FC = () => (
  <>
    <Header />
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-with mb-2">
          Terms and Conditions for BeatMap
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Last updated: 2/6/2025
        </p>
      </header>

      {/* Terms Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8 space-y-6">
          {/* Section 1 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 pl-12">
              By connecting your Spotify account or using BeatMap, you agree to these Terms and our{" "}
              <Link 
                to="/privacy-policy" 
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Privacy Policy
              </Link>
              . If you disagree, do not use the service.
            </p>
          </section>

          {/* Section 2 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
                2. Service Description
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 pl-12">
              BeatMap uses Spotify's API to analyze your listening history and generate statistics. You authorize BeatMap to access your Spotify data (e.g., top tracks, artists) solely for this purpose, per Spotify's{" "}
              <a 
                href="https://developer.spotify.com/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Developer Terms
              </a>.
            </p>
          </section>

          {/* Section 3 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              3. User Responsibilities
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 pl-12">
              You agree not to misuse BeatMap (e.g., automated requests, reverse engineering). Spotify's data is proprietary; you may not redistribute it without permission.
            </p>
          </section>

          {/* Section 4 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
    
                4. Limitation of Liability
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 pl-12">
              BeatMap is not liable for service interruptions, inaccuracies in Spotify's data, or damages arising from your use of the service.
            </p>
          </section>

          {/* Section 5 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">5. Changes to Terms</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 pl-12">
              We may update these Terms. Continued use after changes constitutes acceptance.
            </p>
          </section>

          {/* Section 6 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              6. Contact
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 pl-12">
              Questions? Email us at{" "}
              <a 
                href="mailto:contacto@luifereduardoo.com" 
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                contacto@luifereduardoo.com
              </a>.
            </p>
          </section>
        </div>
        
      </div>
    </div>
    <Footer />
  </>
);

export default Terms;
