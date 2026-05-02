

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import NavLink from "./NavLink";





const Navbar = () => {
  return (
    <nav className="bg-blue-100  px-5 shadow-lg ">
      <div className=" container mx-auto flex flex-wrap items-center
        md:justify-between  justify-center gap-4">
        <div>
          
            <Image src={logo} alt="Logo" width={160} height={50} />
        
        </div>
        {/* Left side */}
        <ul className="flex gap-6 text-gray-700 font-medium ">
          <li>
            <NavLink href={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink href={'/courses'}>Courses</NavLink>
          </li>
          <li>
            <NavLink href={'/profile'}>My Profile</NavLink>
          </li>
        </ul>

        {/* Right side */}
        {/* Profile Icon */}

        <div className="flex items-center gap-4 py-3">
          <h2>Hello, </h2>
          <div className="w-8 h-8 rounded-full overflow-hidden "></div>

          {/* Login Button */}

          <Link
            href={"/login"}
            className="bg-gray-800 text-white px-5 py-1.5 rounded 
            hover:bg-gray-900 cursor-pointer"
          >
            <button className="">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
