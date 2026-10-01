"use client";

import React, { useState } from "react";
import { BarChart3, Star } from "lucide-react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Web Development",
  "Data Science",
];

const moreCategories = [
  "Photography",
  "Business",
  "Design",
  "Programming",
  "Lifestyle",
  "Personal Development",
];

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
];

const courses = [
  {
    id: 1,
    title: "Complete Web Development",
    category: "Web Development",
    instructor: "John Doe",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    price: "$49",
    lessons: 42,
    duration: "8 hours 30 mins",
    comments: 124,
    rating: "4.8",
    level: "Beginner",
    students: "120+",
  },
  {
    id: 2,
    title: "Modern JavaScript Course",
    category: "Web Development",
    instructor: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    price: "$39",
    lessons: 28,
    duration: "5 hours 10 mins",
    comments: 86,
    rating: "4.7",
    level: "Intermediate",
    students: "98+",
  },
  {
    id: 3,
    title: "Learn Digital Marketing",
    category: "Marketing",
    instructor: "Alex Martin",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    price: "$29",
    lessons: 21,
    duration: "3 hours 45 mins",
    comments: 52,
    rating: "4.5",
    level: "Beginner",
    students: "76+",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    category: "Marketing",
    instructor: "Sarah Wilson",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
    price: "$35",
    lessons: 18,
    duration: "3 hours 5 mins",
    comments: 40,
    rating: "4.4",
    level: "Beginner",
    students: "64+",
  },
  {
    id: 5,
    title: "Learn Piano From Scratch",
    category: "Music",
    instructor: "Michael Brown",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
    price: "$45",
    lessons: 30,
    duration: "6 hours 20 mins",
    comments: 71,
    rating: "4.6",
    level: "Beginner",
    students: "88+",
  },
  {
    id: 6,
    title: "Watercolor Painting",
    category: "Drawing & Painting",
    instructor: "Emma Davis",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    price: "$25",
    lessons: 15,
    duration: "2 hours 40 mins",
    comments: 33,
    rating: "4.5",
    level: "Beginner",
    students: "45+",
  },
  {
    id: 7,
    title: "Data Science With Python",
    category: "Data Science",
    instructor: "David Miller",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    price: "$59",
    lessons: 56,
    duration: "12 hours 15 mins",
    comments: 150,
    rating: "4.9",
    level: "Advanced",
    students: "210+",
  },
  {
    id: 8,
    title: "Photography Masterclass",
    category: "Photography",
    instructor: "Robert Wilson",
    image:
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=800&q=80",
    price: "$30",
    lessons: 24,
    duration: "4 hours 50 mins",
    comments: 60,
    rating: "4.6",
    level: "Intermediate",
    students: "70+",
  },
  {
    id: 9,
    title: "Business Fundamentals",
    category: "Business",
    instructor: "William Smith",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    price: "$40",
    lessons: 19,
    duration: "3 hours 30 mins",
    comments: 47,
    rating: "4.3",
    level: "Beginner",
    students: "58+",
  },
  {
    id: 10,
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "Sophia Taylor",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    price: "$45",
    lessons: 35,
    duration: "7 hours 25 mins",
    comments: 98,
    rating: "4.8",
    level: "Intermediate",
    students: "140+",
  },
];

/* ------------------------------------------------------------------ */
/* Course card (Professional কার্ডের ডিজাইন)                           */
/* ------------------------------------------------------------------ */

const CourseCard = ({ course }) => {
  const tags = [
    `${course.lessons} Lessons`,
    course.duration,
    `${course.comments} Comments`,
  ];

  return (
    <article className="flex h-full w-full flex-col rounded-2xl border border-gray-100 bg-white p-3 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Thumbnail */}
      <div className="group relative overflow-hidden rounded-xl">
        <img
          src={course.image}
          alt={course.title}
          className="h-44 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-48"
        />

        <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-1 text-[11px] font-medium text-gray-800">
          {tags.map((tag) => (
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
      <div className="flex flex-1 flex-col px-1 pb-2 pt-4 text-left">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-tight text-gray-900">
            {course.title}
          </h3>
          <div className="mt-0.5 flex shrink-0 items-center gap-1 text-sm font-semibold text-gray-700">
            <span>{course.rating}</span>
            <Star size={16} className="fill-amber-400 text-amber-400" />
          </div>
        </div>

        <p className="mt-0.5 text-xs text-blue-600">
          by{" "}
          <span className="cursor-pointer hover:underline">
            {course.instructor}
          </span>
        </p>

        <div className="mt-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">
            <BarChart3 size={14} className="text-gray-600" />
            <span>{course.level}</span>
          </div>

          <div className="flex items-center -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-7 w-7 rounded-full object-cover ring-2 ring-white"
              />
            ))}
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-yellow-300 px-1 text-[10px] font-bold text-gray-800 ring-2 ring-white">
              {course.students}
            </span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-blue-600">
              {course.price}
            </span>
            <span className="text-xs text-gray-500">/lifetime</span>
          </div>

          <button
            type="button"
            className="mt-4 rounded-full bg-[#003BE2] px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            View Course
          </button>
        </div>
      </div>
    </article>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const Discover = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showMore, setShowMore] = useState(false);

  const filteredCourses =
    activeCategory === "Featured"
      ? courses.slice(0, 6)
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-6xl">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
            Discover Your Passion, <br />
            <span>Build Your Skills</span>
          </h1>

          <p className="mt-5 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#d5fa1e] text-black"
                    : "border border-gray-300 bg-white text-black hover:border-[#d5fa1e] hover:text-[#d5fa1e]"
                }`}
              >
                {category}
              </button>
            );
          })}

          {showMore &&
            moreCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#003BE2] text-white"
                      : "border border-gray-300 bg-white text-black hover:border-[#003BE2] hover:text-[#003BE2]"
                  }`}
                >
                  {category}
                </button>
              );
            })}

          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:border-[#003BE2] hover:text-[#003BE2]"
          >
            {showMore ? "− Less" : "+ More"}
          </button>
        </div>

        {/* COURSE CARDS */}
        <div className="mt-12 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* NO COURSE */}
        {filteredCourses.length === 0 && (
          <div className="py-15 text-center">
            <p className="text-gray-500">
              No courses available in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Discover;