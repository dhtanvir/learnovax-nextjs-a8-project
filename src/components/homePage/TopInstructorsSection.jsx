
import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "Michael Lee",
    title: "Full Stack Developer",
    expertise: "Node.js, Express, MongoDB",
    rating: 4.8,
    students: 12000,
    courses: 8,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "UI/UX Designer",
    expertise: "Figma, Adobe XD",
    rating: 4.7,
    students: 9500,
    courses: 6,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "David Kim",
    title: "Frontend Engineer",
    expertise: "React, Next.js",
    rating: 4.9,
    students: 15000,
    courses: 10,
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    id: 4,
    name: "Emma Wilson",
    title: "Data Scientist",
    expertise: "Python, AI",
    rating: 4.8,
    students: 11000,
    courses: 7,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const InstructorCard = ({ instructor }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border border-gray-100 dark:border-gray-800">
      
      {/* Image */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        <Image
          src={instructor.image}
          alt={instructor.name}
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {instructor.name}
      </h3>

      {/* Title */}
      <p className="text-sm text-gray-500 mb-2">
        {instructor.title}
      </p>

      {/* Expertise */}
      <p className="text-xs text-gray-400 mb-3">
        {instructor.expertise}
      </p>

      {/* Rating */}
      <div className="flex justify-center items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < Math.floor(instructor.rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
          {instructor.rating}
        </span>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-sm text-gray-500 mt-4">
        <span>{instructor.students.toLocaleString()} students</span>
        <span>{instructor.courses} courses</span>
      </div>
    </div>
  );
};

const TopInstructorsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Top Instructors
      </h2>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor.id}
            instructor={instructor}
          />
        ))}
      </div>
    </section>
  );
};

export default TopInstructorsSection;