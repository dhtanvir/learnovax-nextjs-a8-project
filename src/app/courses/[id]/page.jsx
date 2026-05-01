import { Separator } from "@heroui/react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const CoursesDetailsPage = async ({ params }) => {
  const { id } = await params;

  console.log(id, "id params");

  const res = await fetch(
    `https://learnovax-nextjs-a8-project-hpy4.vercel.app/data.json`,
  );
  const courseDetails = await res.json();

  const allCourses = courseDetails.find((c) => c.id == id);

  console.log(allCourses, " all courses details");

  return (
    <div className="container mx-auto py-10">
      <h1>Courses Details : {id}</h1>
      <div className="bg-gray-400 px-5 py-5 rounded-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Image */}
            <div>
              <Image
                src={allCourses.image}
                alt={allCourses.title}
                className="w-full rounded-2xl shadow-lg"
                width={500}
                height={500}
              />
            </div>

            {/* Info */}
            <div>
              {/* Title */}
              <h1 className="text-3xl font-bold">{allCourses.title}</h1>

              {/* Category */}
              <span
                className="inline-block mt-2 bg-gray-200 
              text-sm px-3 py-1 rounded-full"
              >
                {allCourses.category}
              </span>

              {/* Stats */}
              <div className="flex gap-5 py-2">
                <div className="flex items-center gap-2">
                  <p>
                    <FaHeart />
                  </p>
                  <p>{allCourses.rating}</p>
                </div>

                <Separator orientation="vertical" />

                <div className="flex items-center gap-2">
                  <p>{allCourses.level}</p>
                  <p>{allCourses.duration}</p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <strong>Description:</strong> {allCourses.description}
                </p>
              </div>

              {/* Button */}
              <button
                className="mt-8 w-full bg-black text-white py-3
               rounded-lg hover:opacity-90 transition"
              >
                Download Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailsPage;
