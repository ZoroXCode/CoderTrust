"use client";

import React from "react";

const IconShowcase = () => {
  return (
    <div className="mt-24 text-center w-full">
      <h2 className="text-center text-md md:text-lg underline underline-offset-2">
        Use your favorite technology
      </h2>
      <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16 items-center justify-center mt-10">
        <i className="devicon-astro-plain text-5xl md:text-6xl lg:text-7xl"></i>
        <i className="devicon-react-plain text-5xl md:text-6xl lg:text-7xl"></i>
        <i className="devicon-nextjs-plain text-5xl md:text-6xl lg:text-7xl"></i>
        <i className="devicon-materialui-plain text-5xl md:text-6xl lg:text-7xl"></i>
        <i className="devicon-tailwindcss-plain text-5xl md:text-6xl lg:text-7xl"></i>
      </div>
    </div>
  );
};

export default IconShowcase;
