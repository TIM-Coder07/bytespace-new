"use client";

import Image from "next/image";

/*
  বেস লেআউট: ডেস্কটপ 1152 x 600
  - সব পজিশন ও সাইজ কন্টেইনারের % এ, তাই স্ক্রিন ছোট হলে অনুপাত ঠিক থাকে।
  - MIN_W এর নিচে কন্টেইনার আর ছোট হয় না; মোবাইলে দুই পাশ থেকে সামান্য
    কেটে যায়, কিন্তু ছবিগুলো পড়ার মতো বড় থাকে।
*/

const MIN_W = 720; // px — মোবাইলে ছবির এলাকার সর্বনিম্ন চওড়া

// center: true হলে অনুভূমিকভাবে মাঝখানে বসবে
const items = [
  { src: "/Ellipse.png", w: 1500, h: 420, z: 0, center: true, pos: { bottom: 0 }, width: "130.2%" },
  { src: "/Image.png", alt: "Student learning", w: 682, h: 480, z: 10, center: true, pos: { bottom: 0 }, width: "59.2%", priority: true },
  { src: "/Frame1.png", w: 248, h: 412, z: 20, pos: { left: "-16%", top: "-30%" }, width: "21.53%" },
  { src: "/Cone3.png", w: 248, h: 372, z: 30, pos: { left: "95%", bottom: "75%" }, width: "21.53%" },
  { src: "/zero.png", w: 400, h: 480, z: 20, pos: { left: "-13%", top: "28%" }, width: "34.72%" },
  { src: "/Cone.png", w: 200, h: 248, z: 20, pos: { right: "10%", top: "-5%" }, width: "17.36%" },
  { src: "/Frame.png", w: 152, h: 192, z: 20, pos: { right: "86%", top: "-2%" }, width: "13.19%" },
  { src: "/Mask-Group.png", w: 220, h: 352, z: 30, pos: { right: "-8.5%", bottom: "-5%" }, width: "19.1%" },
  { src: "/ux-ui.png", w: 160, h: 56, z: 30, pos: { left: "25%", top: "40%" }, width: "13.89%" },
  { src: "/learn.png", w: 232, h: 120, z: 30, pos: { left: "55%", bottom: "38%" }, width: "20.14%" },
  { src: "/happy.png", w: 192, h: 100, z: 30, pos: { right: "65%", bottom: "15%" }, width: "16.67%" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#003be2] px-5 pt-20 sm:pt-24 lg:pt-28">
      {/* HERO CONTENT */}
      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get Access to Hundreds of Courses Available
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#e5e6e8] sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        {/* SEARCH */}
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex w-full max-w-2xl items-center gap-2 sm:mt-10 rounded-full bg-white p-1.5 shadow-lg shadow-black/10 ring-2 ring-transparent transition focus-within:ring-[#d5fa1e] sm:p-2"
        >
          {/* সার্চ আইকন */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-3 h-5 w-5 shrink-0 text-gray-400 sm:ml-4"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>

          <input
            type="search"
            name="q"
            aria-label="Search courses"
            placeholder="Course, topic, creator"
            className="h-10 min-w-0 flex-1 bg-transparent px-1 text-sm text-black placeholder:text-gray-400 outline-none sm:h-11 sm:text-base"
          />

          <button
            type="submit"
            className="h-10 shrink-0 rounded-full bg-[#d5fa1e] px-4 text-sm font-semibold text-black transition hover:bg-[#c5eb12] active:scale-95 sm:h-11 sm:px-8 sm:text-base"
          >
            Search
          </button>
        </form>
      </div>

      {/* IMAGE AREA */}
      <div className="mt-10 flex justify-center">
        <div
          className="relative w-full max-w-6xl shrink-0"
          style={{
            aspectRatio: "1152 / 600",
            minWidth: MIN_W,
          }}
        >
          {items.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt ?? ""}
              width={item.w}
              height={item.h}
              priority={item.priority}
              sizes="(max-width: 1152px) 100vw, 1152px"
              draggable={false}
              className={`pointer-events-none absolute h-auto select-none ${
                item.center ? "left-1/2 -translate-x-1/2" : ""
              }`}
              style={{ ...item.pos, width: item.width, zIndex: item.z }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;