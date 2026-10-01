import React from "react";

const floatImages = [
  { src: "/unlock/Cone.png", left: "82%", top: "-5%", width: "12%" },
  { src: "/unlock/Mask.png", left: "-17%", top: "-44%", width: "25%" },
  { src: "/unlock/Frame2.png", left: "0%", top: "-12%", width: "14%" },
  { src: "/unlock/Cone2.png", right: "105%", top: "44%", width: "11%" },
  { src: "/unlock/Cone3.png", right: "85%", top: "84%", width: "31%" },
  { src: "/unlock/Cone1.png", right: "-17%", top: "-35%", width: "16%" },
  { src: "/unlock/Frame1.png", right: "-20%", top: "67%", width: "37%" },
];

const Unlock = () => {
  return (
    <section className="overflow-hidden bg-[#003be2] px-5 py-20 sm:py-28 lg:py-36">
      <div className="relative mx-auto max-w-6xl">
        {/* Floating images */}
        {floatImages.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute z-0 h-auto select-none"
            style={{
              left: img.left,
              right: img.right,
              top: img.top,
              bottom: img.bottom,
              width: img.width,
              transform: img.rotate ? `rotate(${img.rotate}deg)` : undefined,
              zIndex: img.z ?? 0,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Unlock Your Potential as a Creator with ByteSpace
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize
            our Course Editor, and showcase your expertise by publishing your
            finest course on the ByteSpace Course Library.
          </p>

          <button
            type="button"
            className="mt-8 rounded-full bg-[#d5fb1f] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[#556409] hover:text-white"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
};

export default Unlock;