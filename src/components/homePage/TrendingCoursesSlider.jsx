"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const courses = [
  {
    id: 1,
    title: "Mastering React & Next.js",
    instructor: "David Kim",
    rating: 4.9,
    students: 18500,
    duration: "22h",
    price: 49,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 2,
    title: "UI/UX Design with Figma",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 14200,
    duration: "16h",
    price: 39,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
  },
  {
    id: 3,
    title: "Node.js API Development",
    instructor: "Michael Lee",
    rating: 4.7,
    students: 12000,
    duration: "18h",
    price: 45,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },

  {
    id: 4,
    title: "Python for Data Science & AI",
    instructor: "Emma Wilson",
    rating: 4.9,
    students: 16000,
    duration: "24h",
    price: 59,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
  {
    id: 5,
    title: "Node.js API Development",
    instructor: "Michael Lee",
    rating: 4.7,
    students: 12000,
    duration: "18h",
    price: 45,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 6,
    title: "Python for Data Science & AI",
    instructor: "Emma Wilson",
    rating: 4.9,
    students: 16000,
    duration: "24h",
    price: 59,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
  {
    id: 7,
    title: "Mastering React & Next.js",
    instructor: "David Kim",
    rating: 4.9,
    students: 18500,
    duration: "22h",
    price: 49,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 8,
    title: "UI/UX Design with Figma",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 14200,
    duration: "16h",
    price: 39,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
  },
];

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl 
    shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
      <div className="relative h-44 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold line-clamp-2 text-gray-800 dark:text-white">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500">{course.instructor}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-yellow-500 font-semibold">{course.rating}</span>

          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < Math.floor(course.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}

          <span className="text-xs text-gray-500 ml-1">
            ({course.students.toLocaleString()})
          </span>
        </div>

        <p className="text-xs text-gray-400 mt-1">{course.duration}</p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-gray-800 dark:text-white">
            ${course.price}
          </span>

          <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

const TrendingCoursesSlider = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Trending Courses</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          370: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingCoursesSlider;
