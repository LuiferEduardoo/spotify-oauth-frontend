import React, { useState, useEffect } from "react";

import { useContext } from "react";

import {
  AuthContext,
  AuthContextType,
} from "../../../providers/AuthContext.provider";
import statsSpotify from "../services/statsSpotify.service";

import SwitchView from "./SwitchView";
import SwitchTime from "./SwitchTime";
import CardElement from "./CardElement";

const SpotifyStats: React.FC = () => {
  const { accessToken, setAccessToken } = useContext(AuthContext) as AuthContextType;

  const [viewType, setViewType] = useState<"artists" | "genres" | "tracks">(
    "artists"
  );
  const [timeFrame, setTimeFrame] = useState<
    "short_term" | "medium_term" | "long_term"
  >("short_term");
  const [data, setData] = useState<any[]>([
    {
      id: "",
      name: "",
      imageUrl: "",
    },
    {
      id: "",
      name: "",
      imageUrl: "",
    },
    {
      id: "",
      name: "",
      imageUrl: "",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    let endpoint = "";

    if (viewType === "artists") {
      endpoint = `https://api.spotify.com/v1/me/top/artists?time_range=${timeFrame}&limit=10`;
    } else if (viewType === "genres") {
      endpoint = `https://api.spotify.com/v1/me/top/artists?time_range=${timeFrame}&limit=10`;
    } else if (viewType === "tracks") {
      endpoint = `https://api.spotify.com/v1/me/top/tracks?time_range=${timeFrame}&limit=10`;
    }

    try {
      const result = await statsSpotify(endpoint, accessToken as string, setAccessToken);

      if (viewType === "artists") {
        setData(
          result.items.map((item: any) => ({
            id: item.id,
            name: item.name,
            imageUrl: item.images[0]?.url || "",
            url: item.external_urls.spotify,
          }))
        );
      } else if (viewType === "genres") {
        const genres: string[] = result.items.flatMap(
          (item: any) => item.genres
        );
        const uniqueGenres: string[] = Array.from(new Set(genres)).slice(0, 10);
        setData(
          uniqueGenres.map((genre, index) => ({
            id: `${genre}-${index}`,
            name: genre,
            imageUrl: "", // Los géneros no tienen imágenes directamente
          }))
        );
      } else if (viewType === "tracks") {
        setData(
          result.items.map((item: any) => ({
            id: item.id,
            name: item.name,
            imageUrl: item.album.images[0]?.url || "",
            artist: item.artists.map((artist: any) => artist.name).join(", "),
            album: item.album.name,
            url: item.external_urls.spotify,
          }))
        );
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [viewType, timeFrame]);

  return (
    <div className="flex flex-col items-center p-6 bg-[#1a1a1a] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Your Spotify Stats</h1>

      {/* Buttons to switch between views */}
      <SwitchView 
        setViewType={setViewType}
        viewType={viewType}
      />

      {/* Buttons to switch time frames */}
      <SwitchTime 
        setTimeFrame={setTimeFrame}
        timeFrame={timeFrame}
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <CardElement item={item} isLoading={loading} viewType={viewType} key={index} />
        ))}
      </section>
    </div>
  );
};

export default SpotifyStats;
