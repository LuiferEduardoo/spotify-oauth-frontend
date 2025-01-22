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
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md"
        >
          <img
            src={
              item.imageUrl ||
              "https://m.media-amazon.com/images/I/51rttY7a+9L.png"
            }
            alt={item.name}
            className={`w-32 h-32 ${
              item.imageUrl ? "rounded-full" : ""
            } object-cover mb-4`}
          />
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
