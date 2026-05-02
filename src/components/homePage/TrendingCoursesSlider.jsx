"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

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
];

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-lg
     transition duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 h-full flex flex-col">
      
      {/* Image Container */}
      <div className="relative aspect-video w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-bold line-clamp-2 text-gray-800 dark:text-white mb-1 h-10 sm:h-12">
          {course.title}
        </h3>

        <p className="text-xs text-gray-500 mb-2">{course.instructor}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-auto">
          <span className="text-yellow-600 text-xs font-bold">
            {course.rating}
          </span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < Math.floor(course.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 ml-1">
            ({course.students.toLocaleString()})
          </span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between mt-4 border-t pt-3 dark:border-gray-800">
          <span className="text-base font-bold text-gray-900 dark:text-white">
            ${course.price}
          </span>
          <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-md hover:bg-blue-700 transition font-medium">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

const TrendingCoursesSlider = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-black/5 flex justify-center items-center">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      <div className="flex justify-between items-end mb-8">
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Trending Courses
            </h2>
          
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2} 
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ 
            clickable: true,
            dynamicBullets: true 
        }}
        breakpoints={{
          // Tablet
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Laptop
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          // Desktop
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="pb-12" 
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id} className="h-auto">
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </section>
  );
};

export default TrendingCoursesSlider;