import React from "react";

import Header from "../components/Header";
import Footer from "../../components/Footer";

const PrivacyPolicy: React.FC = () => (
  <>
    <Header />
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-with">
          Privacy Policy for BeatMap
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Last updated: 2/6/2025
        </p>
      </header>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8 space-y-8">
          {/* Section 1 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              1. Data We Access
            </h2>
            <div className="mt-3 text-gray-600 dark:text-gray-300 pl-12 space-y-4">
              <p>
                BeatMap requests the following permissions via Spotify's API:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Basic profile info (
                  <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    user-read-private
                  </span>
                  ,{" "}
                  <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    user-read-email
                  </span>
                  )
                </li>
                <li>
                  Your top artists and tracks (
                  <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    user-top-read
                  </span>
                  )
                </li>
                <li>
                  Recently played songs (
                  <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    user-read-recently-played
                  </span>
                  )
                </li>
                <li>
                  Your playlists (
                  <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    playlist-read-private
                  </span>
                  ,{" "}
                  <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    playlist-read-collaborative
                  </span>
                  )
                </li>
                <li>
                  Saved tracks/albums (
                  <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    user-library-read
                  </span>
                  )
                </li>
              </ul>
              <p>
                <strong>We do not store this data on our servers.</strong> All
                data is fetched in real-time and processed locally in your
                browser.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              2. Cookies & Local Storage
            </h2>
            <div className="mt-3 text-gray-600 dark:text-gray-300 pl-12 space-y-4">
              <p>We use only essential storage technologies:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Access Token:</strong> Stored locally to maintain your
                  Spotify session (expires automatically).
                </li>
              </ul>
              <p>No tracking cookies or third-party analytics are used.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              3. Data Security
            </h2>
            <div className="mt-3 text-gray-600 dark:text-gray-300 pl-12 space-y-2">
              <p>Your Spotify data is protected by:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Spotify's OAuth 2.0 authentication</li>
                <li>HTTPS encryption for all API requests</li>
                <li>Token expiration enforced by Spotify (typically 1 hour)</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              4. Third-Party Services
            </h2>
            <div className="mt-3 text-gray-600 dark:text-gray-300 pl-12">
              <p>BeatMap relies on:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>Spotify API:</strong> All data handling by Spotify is
                  governed by their
                  <a
                    href="https://www.spotify.com/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1"
                  >
                    Privacy Policy
                  </a>
                  .
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              5. Your Rights
            </h2>
            <div className="mt-3 text-gray-600 dark:text-gray-300 pl-12 space-y-2">
              <p>You can:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Revoke access:</strong> Anytime via your
                  <a
                    href="https://www.spotify.com/account/apps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1"
                  >
                    Spotify account settings
                  </a>
                  .
                </li>
                <li>
                  <strong>Clear local data:</strong> Delete cookies/local
                  storage in your browser.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              6. Contact
            </h2>
            <div className="mt-3 text-gray-600 dark:text-gray-300 pl-12">
              <p>
                For privacy concerns, email us at{" "}
                <a
                  href="mailto:contacto@luifereduardoo.com"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  contacto@luifereduardoo.com
                </a>
                .
              </p>
            </div>
          </section>
          <section className="group">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center">
              7. Changes To Our Privacy Policy
            </h2>
            <div className="mt-3 text-gray-600 dark:text-gray-300 pl-12">
              <p>This Privacy Policy is effective June 2, 2025.</p>
              <p>
                This Privacy Policy may be update from time to time. You can
                obtain a copy of the lastest version ot any time at:
              </p>
              <a
                href="https://beatmap.luifereduardoo.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                https://beatmap.luifereduardoo.com/privacy
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default PrivacyPolicy;
