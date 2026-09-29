const Hero = () => {
  return (
    <section className="px-5 py-20 sm:py-24 lg:py-32 bg-[#003be2]">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        {/* Hero Content */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get Access to Hundreds of Courses Available
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#e5e6e8] sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        {/* Search */}
        <div className="mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="search"
            placeholder="Course, topic, creator"
            className="h-12 flex-1 rounded-lg border border-gray-300 bg-gray-300 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="button"
            className="h-12 rounded-lg bg-[#d5fa1e] px-8 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;