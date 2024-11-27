"use client";

import { ArrowUp } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="h-14 border-t-2 flex items-center justify-between px-8">
      <p className="text-primary">
        &copy; {new Date().getFullYear()} CoderTrust. All credits to{" "}
        <a
          href="https://github.com/zoroxcode"
          target="_blank"
          className="text-primary underline font-mono"
        >
          ZoroXCode
        </a>
      </p>
      <Button variant="outline" size="icon">
        <ArrowUp />
      </Button>
    </footer>
  );
}

export default Footer;
