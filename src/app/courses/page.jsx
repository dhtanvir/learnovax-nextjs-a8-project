import CoursesCard from '@/components/homePage/CoursesCard';
import React from 'react';

const CoursesPage = async () => {

 const res = await fetch(
    "https://learnovax-nextjs-a8-project-hpy4.vercel.app/data.json",
  );
  const allCourses = await res.json();
  console.log(allCourses, "coursesPage  data");


    return (
        <div className='container mx-auto py-10 '>
            <h1 className='text-xl'>Courses page : {allCourses.length}</h1>
            <h1 className='text-2xl font-bold text-center pb-4'> All Courses  </h1>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
             {allCourses.map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
           </div>
        </div>
    );
};

export default CoursesPage;