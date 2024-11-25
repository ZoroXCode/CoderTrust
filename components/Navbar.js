import Link from "next/link";
import React from "react";
import { ThemeChanger } from "./ThemeChanger";
import { DropdownMenuCheckboxes } from "./Dropdown";

function Navbar() {
  return (
    <div className="bg-background/50 backdrop-blur-sm w-full h-14 flex items-center justify-center md:px-14 border-b fixed p-4">
      <nav className="flex items-center justify-between w-full">
        <p className="font-bold text-xl">CoderTrust</p>
        <div className="hidden md:flex">
          <ul className="flex gap-5 items-center">
            <li className="hover:text-primary">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="services">Services</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/contact">Contact</Link>
            </li>
            <ThemeChanger />
          </ul>
        </div>
      </nav>
      <div className="md:hidden">
        <DropdownMenuCheckboxes />
      </div>
    </div>
  );
}

export default Navbar;
