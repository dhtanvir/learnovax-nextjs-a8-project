import CoursesCard from "./CoursesCard";

const TopCoursesPage = async () => {
  const res = await fetch(
    "https://learnovax-nextjs-a8-project-hpy4.vercel.app/data.json",
  );
  const allCourses = await res.json();
  console.log(allCourses, "courses data");

  const topCourses = [...allCourses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-5">
      <div className="py-10 space-y-2 ">
        <h1 className=" font-bold text-md ">All Courses :{allCourses.length}</h1>
        <h1 className=" font-bold text-md ">Top Courses :{topCourses.length}</h1>
        <div>
          <h2 className=" font-semibold text-2xl ">Available Courses</h2>
        </div>

        <div className="grid lg:grid-cols-3 items-center justify-center gap-4 py-5">
          {topCourses.map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCoursesPage;
