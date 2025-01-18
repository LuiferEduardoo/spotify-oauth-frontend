import { Dispatch, SetStateAction } from "react";

interface propsCardElement {
  setViewType: Dispatch<SetStateAction<"artists" | "genres" | "tracks">>;
  viewType: string;
}

const SwitchView: React.FC<propsCardElement> = ({ setViewType, viewType }) => {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => setViewType("artists")}
        className={`px-4 py-2 rounded ${
          viewType === "artists" ? "bg-spotify-green" : "bg-gray-700"
        }`}
      >
        Artists
      </button>
      <button
        onClick={() => setViewType("genres")}
        className={`px-4 py-2 rounded ${
          viewType === "genres" ? "bg-spotify-green" : "bg-gray-700"
        }`}
      >
        Genres
      </button>
      <button
        onClick={() => setViewType("tracks")}
        className={`px-4 py-2 rounded ${
          viewType === "tracks" ? "bg-spotify-green" : "bg-gray-700"
        }`}
      >
        Tracks
      </button>
    </div>
  );
};

export default SwitchView;