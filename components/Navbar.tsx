"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {


  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-6 bg-gray-700 shadow-md shadow-teal-500 fixed top-0 z-10">
      <div className="flex justify-between h-16 ">
        <div className="flex justify-between items-center w-full">
          <Link href={"/"} className="flex gap-3 items-center">
            <div className="relative h-11 w-11 object-cover">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="rounded-full object-cover shadow-2xl"
              />
            </div>
            <h2 className="text-2xl font-medium">
              Chain<span className="text-teal-500">Reaction</span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
