import React from "react";
import { CurveText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CurveText className={"fill-dark animate-spin-slow stroke-gray-600 dark:fill-light dark:stroke-light"} />
        <Link
          href={`mailto:kelzzzer@gmail.com`}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark  text-light shadow-md border border-solid border-dark w-20  h-20 rounded-full font-semibold -rotate-12 
          
          hover:bg-light hover:text-dark hover:scale-110 duration-200
          
          dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light
          "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
