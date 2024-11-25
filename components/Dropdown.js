"use client";

import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { ThemeChanger } from "./ThemeChanger";

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-10">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 mx-6 text-center">
        <DropdownMenuLabel className="text-center">Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* Links Section */}
        <div className="flex flex-col items-center">
          <Link href="/" className="w-full">
            <DropdownMenuCheckboxItem className="w-full text-center">
              Home
            </DropdownMenuCheckboxItem>
          </Link>
          <Link href="/about" className="w-full">
            <DropdownMenuCheckboxItem className="w-full text-center">
              About
            </DropdownMenuCheckboxItem>
          </Link>
          <Link href="/contact" className="w-full">
            <DropdownMenuCheckboxItem className="w-full text-center">
              Contact
            </DropdownMenuCheckboxItem>
          </Link>
          <Link href="/services" className="w-full">
            <DropdownMenuCheckboxItem className="w-full text-center">
              Services
            </DropdownMenuCheckboxItem>
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
