"use client";

import { ArrowUp } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };

  return (
    <footer className="h-14 border-t-2 flex items-center justify-between px-8">
      <p className="text-primary text-sm">
        &copy; {new Date().getFullYear()} CoderTrust. All credits to{" "}
        <a
          href="https://github.com/zoroxcode"
          target="_blank"
          className="text-primary underline font-mono"
        >
          ZoroXCode
        </a>
      </p>
      <Button variant="outline" size="icon" onClick={scrollToTop}>
        <ArrowUp />
      </Button>
    </footer>
  );
}

export default Footer;
