import { Dispatch, SetStateAction } from "react";

interface propsCardElement {
  setTimeFrame: Dispatch<SetStateAction<"short_term" | "medium_term" | "long_term">>;
  timeFrame: string;
}

const SwitchTime: React.FC<propsCardElement> = ({ setTimeFrame, timeFrame }) => {
  return (
    <div className="flex gap-4 mb-8">
        <button
          onClick={() => setTimeFrame("short_term")}
          className={`px-4 py-2 rounded ${
            timeFrame === "short_term" ? "bg-spotify-green" : "bg-gray-700"
          }`}
        >
          Last Month
        </button>
        <button
          onClick={() => setTimeFrame("medium_term")}
          className={`px-4 py-2 rounded ${
            timeFrame === "medium_term" ? "bg-spotify-green" : "bg-gray-700"
          }`}
        >
          Last 6 Months
        </button>
        <button
          onClick={() => setTimeFrame("long_term")}
          className={`px-4 py-2 rounded ${
            timeFrame === "long_term" ? "bg-spotify-green" : "bg-gray-700"
          }`}
        >
          Last Year
        </button>
      </div>
  );
};

export default SwitchTime;