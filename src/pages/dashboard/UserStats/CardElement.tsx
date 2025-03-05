import Skeleton from "@mui/material/Skeleton";

interface propsCardElement {
  item: {
    id: string;
    imageUrl: string;
    name: string;
    artist: string;
    album: string;
    url: string;
  };
  viewType: string;
  isLoading: boolean;
}

const CardElement: React.FC<propsCardElement> = ({
  item,
  viewType,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        viewType === "tracks" ? (
          <Skeleton variant="rounded" width={330} height={200} />
        ) : (
          <Skeleton variant="rounded" width={180} height={200} />
        )
      ) : (
        <a
          href={viewType === "genres" ? `https://open.spotify.com/search/${item.name}/genres` : item.url }
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md"
        >
          {/* Logo de Spotify en la esquina superior izquierda */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Spotify Logo"
            className="absolute bg-gray-900 p-2 rounded-lg top-2 left-2 w-16"
          />

          {/* Imagen del álbum o track */}
          <img
            src={
              item.imageUrl ||
              "https://cdn-3.expansion.mx/dims4/default/1e4a4a6/2147483647/strip/true/crop/784x442+0+0/resize/1200x677!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F50%2F87%2Fa8b460e94ae590ae960f757e6f5d%2Fgenero-musical-spotify.jpg"
            }
            alt={item.name}
            className={`w-32 h-32 ${
              item.imageUrl ? "rounded-full" : ""
            } object-cover mb-4`}
          />

          {/* Información */}
          <h3 className="text-lg font-bold">{item.name}</h3>
          {viewType === "tracks" && (
            <p className="text-sm">
              {item?.artist?.length > 35
                ? `${item?.artist?.slice(0, 35)}...`
                : item?.artist}
            </p>
          )}
        </a>
      )}
    </>
  );
};

export default CardElement;