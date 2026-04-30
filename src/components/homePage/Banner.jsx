import { Button } from "@heroui/react";
import Image from "next/image";
import bannerImage from "@/assets/banner-image.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1  md:grid-cols-2 items-center justify-center gap-5 ">
        <div className="space-y-4">
          <div
            className="inline-flex items-center gap-2
           bg-green-500/10 border border-green-400/30
            text-green-500 text-sm font-medium px-5 py-2 rounded-full"
          >
            ✨ Frontier AI Models
          </div>
          <h2 className="text-6xl font-extrabold leading-tight text-gray-800">
            Generte Your Skills <br />
            <span
              className="bg-linear-to-r from-purple-400
             via-purple-500 to-green-200 bg-clip-text text-transparent"
            >
              Today
            </span>
            🚀
          </h2>
          <p>Instantly Create Personalized Courses, Quizzes, and Lessons. </p>
          <div className="flex gap-4">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Generate First Course
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src={bannerImage}
              alt="Banner Image"
              width={500}
              height={300}
              className="relative h-130
               w-auto object-contain drop-shadow-2xl 
                animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
