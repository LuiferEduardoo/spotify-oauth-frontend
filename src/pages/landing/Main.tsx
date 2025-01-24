const Main = () => {
  return (
    <main className="container mx-auto px-6 md:px-10 lg:px-20 my-20">
      <section className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold">
          Discover Your Music Trends with BeatMap
        </h2>
        <p className="mt-4 text-gray-300">
          Filter your stats by the last month, the past six months, or even the
          last year. Gain insights into your listening habits and uncover
          patterns in your musical journey.
        </p>
      </section>

      <section className="flex flex-wrap gap-6 justify-center">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center w-full md:w-1/3">
          <h3 className="text-xl font-semibold">Top Artists</h3>
          <p className="mt-2 text-gray-400">
            See which artists you've been vibing with the most.
          </p>
          <img src="https://beatmap.img.luifereduardoo.com/artist.webp" />
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center w-full md:w-1/3">
          <h3 className="text-xl font-semibold">Favorite Songs</h3>
          <p className="mt-2 text-gray-400">
            Rediscover the tracks you just can't stop playing.
          </p>
          <img src="https://beatmap.img.luifereduardoo.com/songs.webp" />
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center w-full md:w-1/3">
          <h3 className="text-xl font-semibold">Top Genres</h3>
          <p className="mt-2 text-gray-400">
            Explore the genres that define your music taste.
          </p>
          <img src="https://beatmap.img.luifereduardoo.com/gender.webp" />
        </div>
      </section>
    </main>
  );
};

export default Main;
