const Main = () => {
  return (
    <main className="container mx-auto px-6 md:px-10 lg:px-20 my-20">
      <section className="mb-12 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center text-center md:text-left gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">
            Discover Your Music Trends with BeatMap
          </h1>
          <p className="mt-4 text-gray-300">
            Filter your stats by the last month, the past six months, or even
            the last year. Gain insights into your listening habits and uncover
            patterns in your musical journey.
          </p>
        </div>
        <img
          src="https://beatmap.img.luifereduardoo.com/account.webp"
          alt="BeatMap Account Overview"
          className="w-full h-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl  mb-8 md:mb-0"
        />
      </section>

      <section className="mb-12 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center text-center md:text-left gap-8">
        <img
          src="https://beatmap.img.luifereduardoo.com/trends.webp"
          alt="trends"
          className="w-full h-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl  mb-8 md:mb-0"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">Here you can...</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>See your favorite artists</li>
            <li>See your most listened to genres</li>
            <li>See your most listened to songs</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
