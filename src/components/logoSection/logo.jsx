import Image from "next/image";

const Logo = () => {
  const logos = [
    {
      image: "/Vector.png",
      name: "Logoipsum",
    },
    {
      image: "/Vector1.png",
      name: "Logoipsum",
    },
    {
      image: "/Vector2.png",
      name: "Logoipsum",
    },
    {
      image: "/Vector3.png",
      name: "Logoipsum",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f6] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 sm:gap-12 lg:justify-between lg:gap-16">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <Image
              src={logo.image}
              alt={logo.name}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />

            <p className="text-xl font-semibold text-[#82868e]">
              {logo.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logo;