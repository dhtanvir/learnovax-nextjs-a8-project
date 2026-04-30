"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={href}
        className={
          pathname === href
            ? "text-blue-500 font-bold border-b-2 pb-1 border-blue-500"
            : "text-gray-700"
        }
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
