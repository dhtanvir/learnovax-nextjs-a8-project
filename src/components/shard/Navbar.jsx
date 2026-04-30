import React from "react";
import NavLink from "./Navlink";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo.png'

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-200 px-6  flex 
    items-center justify-between">
      <div>
        <Link  href={'/'}>
          <Image src={logo} alt="Logo" width={190} height={50} />
        </Link>
      </div>
      {/* Left side */}
      <ul className="flex gap-6 text-gray-700 font-medium ">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink href="/profile">My Profile</NavLink>
        </li>
      </ul>

      {/* Right side */}
      {/* Profile Icon */}

      <div className="flex items-center gap-4">
        <h2>Hello, </h2>
        <div className="w-8 h-8 rounded-full overflow-hidden ">
          {/* <Image
                src="#"
                alt="Profile"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              /> */}
        </div>

        {/* Login Button */}

        <Link
          href="/login"
          className="bg-gray-800 text-white px-5 py-1.5 rounded 
            hover:bg-gray-900 cursor-pointer"
        >
          <button className="">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
