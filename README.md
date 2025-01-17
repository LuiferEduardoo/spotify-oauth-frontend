# Spotify OAuth frontend

This project is a **frontend application** that allows users to visualize detailed statistics about their most-listened-to songs and artists by linking their Spotify account. The backend handles authentication and Spotify data retrieval, while the frontend provides an engaging and interactive user interface.

## Features

- **Landing Page**
  - An informative introduction to the application.
  - A **Login with Spotify** button for users to authenticate and access their data.

- **Dashboard**
  - Displays comprehensive statistics on:
    - Most-listened-to songs.
    - Top artists.
    - Listening trends and more.
  - A sleek and responsive design for a seamless user experience.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS (or other CSS framework as needed)
- **Backend**: Handles Spotify API authentication and data fetching (not included in this repository).

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running backend service for Spotify authentication (provided separately).

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/LuiferEduardoo/spotify-oauth-frontend
cd spotify-oauth-frontend
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Environment Variables

Create a `.env` file in the project root and include the following variables:

```env
VITE_BACKEND_URL=http://your-backend-url
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
spotify-stats-viewer/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Landing and Dashboard pages
│   ├── services/          # API interaction logic
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Entry point
├── public/                # Static assets
├── .env                   # Environment variables
├── vite.config.ts         # Vite configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build locally.

## Deployment

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Serve the `dist/` folder using your preferred hosting solution (e.g., Vercel, Netlify).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) for providing the data.
- The open-source community for tools and libraries.

---

Happy coding! 🎵