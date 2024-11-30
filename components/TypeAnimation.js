"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypeAnimation = () => {
  const typedElement = useRef(null); // Create a ref for the target element
  const typedInstance = useRef(null); // Store the Typed instance to clean up later

  useEffect(() => {
    if (typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: ["CoderTrust.", "Hello World", "Your Trust"], // Example strings
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });
    }

    // Clean up on component unmount
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return <span ref={typedElement}></span>;
};

export default TypeAnimation;
