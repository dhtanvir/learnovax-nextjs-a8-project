import CoursesCard from "@/components/homePage/CoursesCard";
import SearchBox from "@/components/shard/SearchBox";
import { Search } from "lucide-react";
import React from "react";

const CoursesPage = async ({ searchParams }) => {
  const res = await fetch(
    "https://learnovax-nextjs-a8-project-hpy4.vercel.app/data.json",
  );
  const allCourses = await res.json();

  // console.log(allCourses, "coursesPage  data");

  const params = await searchParams;
  const searchQuery = params?.search || "";

  const filteredCourses = allCourses.filter((course) => {
    return course.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  console.log(filteredCourses ,"Filtered Courses");
  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-xl">Courses page : {filteredCourses.length}</h1>
      <h1 className="text-2xl font-bold text-center pb-4"> All Courses </h1>
      <div className=" py-5 flex items-center justify-center">
        <SearchBox />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-center col-span-3"> no courses found </p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
