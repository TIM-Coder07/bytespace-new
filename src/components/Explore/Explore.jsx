import React from "react";

const Explore = () => {
  const paths = [
    {
      image: "/Outlined1.png",
      name: "Photography",
    },
    {
      image: "/Outlined2.png",
      name: "Marketing",
      description: "Build modern websites and powerful applications.",
    },
    {
      image: "/Outlined3.png",
      name: "Business",
      description: "Learn skills to grow and manage your business.",
    },
    {
      image: "/Outlined4.png",
      name: "IT & Software",
    },
    {
      image: "/Outlined5.png",
      name: "Development",
    },
    {
      image: "/Outlined6.png",
      name: "Design",
    },
  ];

  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
            Explore Diverse Learning Paths at Bytespace
          </h1>

          <p className="mt-5 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        {/* ================= LEARNING PATHS ================= */}

        <div className="mt-12 flex flex-wrap justify-center gap-6 lg:flex-nowrap">
  {paths.map((path) => (
    <div
      key={path.name}
      className="
        group
        flex
        w-full
        flex-col
        items-center
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        text-center
        transition
        duration-300
        hover:-translate-y-2
        hover:border-[#003BE2]
        hover:shadow-lg

        sm:w-[45%]

        lg:w-[190px]
        lg:shrink-0
      "
    >
      {/* ICON */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d5fa1e]">
        <img
          src={path.image}
          alt={path.name}
          className="h-8 w-8 object-contain"
        />
      </div>

      {/* NAME */}
      <h2 className="mt-5 text-lg font-semibold text-black">
        {path.name}
      </h2>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Explore;
