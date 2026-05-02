import Banner from "@/components/homePage/Banner";
import LearningTipsSection from "@/components/homePage/LearningTipsSection";
import TopCoursesPage from "@/components/homePage/TopCourses";
import TopInstructorsSection from "@/components/homePage/TopInstructorsSection";
import TrendingCoursesSlider from "@/components/homePage/TrendingCoursesSlider";
import { ToastContainer } from "react-toastify";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center
     justify-center bg-zinc-50 font-sans dark:bg-black">
       
        <Banner/>
        <TopCoursesPage/>
        <LearningTipsSection/>
        <TopInstructorsSection/>
        <TrendingCoursesSlider/>
     <ToastContainer/>
    </div>
  );
}
