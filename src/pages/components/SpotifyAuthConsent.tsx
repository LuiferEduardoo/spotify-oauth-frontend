import { useState } from 'react';
import { Link } from 'react-router-dom';

const SpotifyAuthConsent = ({ onClose, onAgree }: { onClose: () => void; onAgree: () => void }) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Before connecting to Spotify...
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            To use BeatMap, you must agree to our:
          </p>

          <div className="space-y-3">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span className="text-gray-700 dark:text-gray-300">
                <Link 
                  to="/terms" 
                  target="_blank" 
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Terms & Conditions
                </Link>
              </span>
            </label>

            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={acceptedPrivacy}
                onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                className="mt-1 h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <span className="text-gray-700 dark:text-gray-300">
                <Link 
                  to="/privacy-policy" 
                  target="_blank" 
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (acceptedTerms && acceptedPrivacy) {
                onAgree(); // Solo se ejecuta si ambos checkboxes están marcados
              }
            }}
            disabled={!acceptedTerms || !acceptedPrivacy}
            className={`px-4 py-2 rounded-md ${acceptedTerms && acceptedPrivacy ? 
              'bg-green-600 hover:bg-green-700 text-white' : 
              'bg-gray-300 dark:bg-gray-600 cursor-not-allowed text-gray-500'}`}
          >
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotifyAuthConsent;