"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import NavLink from "./NavLink";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  // console.log(user);

  return (
    <nav className="bg-blue-100 px-5 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center md:justify-between justify-center gap-4">
        <div>
          <Image src={logo} alt="Logo" width={160} height={50} />
        </div>
        {/* Left side */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/courses"}>Courses</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
        </ul>

        {/* Right side */}
        {/* Profile Icon */}

        <div className="flex gap-4">
          {!user ? (
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <Link href={"/signup"}>
                  <button className="btn bg-gray-400 text-white px-5 py-2 rounded-lg font-bold cursor-pointer">
                    SignUp
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/signin"}>
                  <button className="btn bg-gray-400 text-white px-5 py-2 rounded-lg font-bold cursor-pointer">
                    SignIn
                  </button>
                </Link>
              </li>
            </ul>
          ) : (
            <div className="flex items-center justify-between gap-3">
              {user && <p>Hello, {user.name}</p>}
              <Avatar size="sm">
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button
                size="sm"
                onClick={async () => {
                  await authClient.signOut();
                  toast.success("Logged out");
                }}
                variant="danger"
              >
                SignOut
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
