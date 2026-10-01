"use client";

import React, { useEffect, useRef, useState } from "react";
import { BarChart3, CheckCircle2, Star } from "lucide-react";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const course = {
  title: "Learn Figma from Basic",
  image:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
  tags: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
  rating: "4.5",
  author: "purepearl studio",
  level: "Beginner",
  avatars: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
  ],
  moreStudents: "26+",
  price: "$25",
};

const DESIGN_W = 544;

const ScaledStage = ({ children }) => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [innerH, setInnerH] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!outerRef.current || !innerRef.current) return;
      setScale(Math.min(1, outerRef.current.clientWidth / DESIGN_W));
      setInnerH(innerRef.current.offsetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(outerRef.current);
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={outerRef}
      className="w-full"
      style={{ height: innerH ? innerH * scale : undefined }}
    >
      <div
        ref={innerRef}
        className="relative mx-auto origin-top-left"
        style={{ width: DESIGN_W, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
};

const Float = ({ src, left, right, top, w, h }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute z-10"
    style={{ left, right, top, width: w, height: h }}
  >
    <img src={src} alt="" className="h-full w-full select-none object-contain" />
  </div>
);

const CourseCard = ({ data }) => (
  <article className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-3 shadow-lg">
    {/* Thumbnail */}
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={data.image}
        alt={data.title}
        className="h-48 w-full object-cover"
      />

      <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-1 text-[11px] font-medium text-gray-800">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Content */}
    <div className="px-1 pb-2 pt-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold leading-tight text-gray-900">
          {data.title}
        </h3>
        <div className="mt-0.5 flex shrink-0 items-center gap-1 text-sm font-semibold text-gray-700">
          <span>{data.rating}</span>
          <Star size={16} className="fill-amber-400 text-amber-400" />
        </div>
      </div>

      <p className="mt-0.5 text-xs text-blue-600">
        by <span className="cursor-pointer hover:underline">{data.author}</span>
      </p>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">
          <BarChart3 size={14} className="text-gray-600" />
          <span>{data.level}</span>
        </div>

        <div className="flex items-center -space-x-2">
          {data.avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-7 w-7 rounded-full object-cover ring-2 ring-white"
            />
          ))}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-300 text-[10px] font-bold text-gray-800 ring-2 ring-white">
            {data.moreStudents}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-1 border-t border-gray-100 pt-3">
        <span className="text-xl font-extrabold text-blue-600">
          {data.price}
        </span>
        <span className="text-xs text-gray-500">/lifetime</span>
      </div>
    </div>
  </article>
);

const RevenueCards = () => (
  <div>
    {/* Card 1: Total Revenue */}
    <div className="relative flex h-[120px] w-[280px] flex-col justify-between rounded-3xl bg-blue-600 p-5 text-white shadow-lg">
      <div>
        <h4 className="text-lg font-semibold leading-tight">Total Revenue</h4>
        <p className="mt-0.5 text-xs text-blue-200">July 1-28</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold tracking-tight">$120.29</span>
        <span className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-gray-900">
          +12$
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/30">
        <div className="h-full w-3/5 rounded-full bg-[#ccff00]" />
      </div>
    </div>

    {/* Card 2: Year to Date */}
    <div className="relative mt-5 flex h-[200px] w-[200px] flex-col justify-between rounded-3xl bg-blue-600 p-5 text-white shadow-lg">
      <div>
        <h4 className="text-lg font-semibold leading-tight">Year to Date</h4>
        <p className="mt-0.5 text-xs text-blue-200">2023</p>
      </div>

      <div>
        <span className="text-xl font-bold tracking-tight">$1,200.38</span>
      </div>

      <div>
        <span className="inline-block rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-gray-900">
          +12$
        </span>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const Professional = () => {
  return (
    <section className="min-h-screen overflow-x-clip bg-gradient-to-tr from-[#e3f6f5] via-[#faffd8] to-[#edf0fc] px-5 py-12 sm:py-16 lg:py-24">
      {/* ------------- First Part ------------- */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Your Path to Professional Growth Starts Here!
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-black sm:text-lg lg:mx-0">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <dl className="mx-auto mt-8 grid max-w-md grid-cols-3 divide-x divide-gray-200 lg:mx-0">
            {stats.map((item) => (
              <div key={item.label} className="px-3 first:pl-0 sm:px-6">
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-2xl font-extrabold text-blue-600 sm:text-3xl">
                  {item.value}
                </dd>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        {/* Course card + floating images */}
        <ScaledStage>
          <div className="flex justify-end">
            <CourseCard data={course} />
          </div>

          <Float src="/Image.png" left={-30} top={0} w={1000} h={450} />
          <Float src="/learn.png" left={500} top={130} w={200} h={200} />
          <Float src="/Frame3.png" left={550} top={40} w={200} h={200} />
        </ScaledStage>
      </div>

      {/* ------------- Second Part ------------- */}
      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 sm:mt-20 lg:mt-28 lg:grid-cols-2 lg:gap-16">
        {/* Revenue cards + floating images */}
        <ScaledStage>
          <RevenueCards />

          <Float src="/Image2.png" right={-250} top={30} w={1000} h={450} />
          <Float src="/happy.png" left={300} top={220} w={200} h={200} />
          <Float src="/Mask.png" left={350} top={170} w={150} h={150} />
        </ScaledStage>

        {/* Text */}
        <div className="max-w-xl text-center font-sans text-gray-900 lg:text-left">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Create & Manage Courses Easily.
          </h1>

          <p className="mb-8 text-base leading-relaxed text-gray-600">
            <strong className="font-semibold text-gray-900">ByteSpace</strong>{" "}
            supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>

          <ul className="mx-auto w-fit space-y-4 text-left lg:mx-0">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-600" />
                <span className="text-base font-medium text-gray-800 sm:text-lg">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Professional;