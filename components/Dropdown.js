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
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faServicestack,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faPhone, faServer } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard, faFile } from "@fortawesome/free-regular-svg-icons";

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
        <div className="flex flex-col">
          <Link href="/" className="w-full">
            <DropdownMenuItem className="w-full flex justify-between items-center">
              Home
              <p>
                <FontAwesomeIcon icon={faHome} className="text-sx" />
              </p>
            </DropdownMenuItem>
          </Link>
          <Link href="/about" className="w-full">
            <DropdownMenuItem className="w-full flex justify-between">
              About
              <p>
                <FontAwesomeIcon icon={faAddressCard} className="text-sx" />
              </p>
            </DropdownMenuItem>
          </Link>
          <Link href="/contact" className="w-full">
            <DropdownMenuItem className="w-full flex justify-between">
              Contact
              <p>
                <FontAwesomeIcon icon={faPhone} className="text-sx" />
              </p>
            </DropdownMenuItem>
          </Link>
          <Link href="/services" className="w-full">
            <DropdownMenuItem className="w-full flex justify-between">
              Services
              <p>
                <FontAwesomeIcon icon={faServer} className="text-sx" />
              </p>
            </DropdownMenuItem>
          </Link>{" "}
          <DropdownMenuSeparator className="w-full" />
          <div className="flex flex-row justify-between px-2">
            <Link href="https://github.com/CoderTrust">
              <FontAwesomeIcon icon={faGithub} className="text-lg m-1" />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faDiscord} className="text-lg m-1" />
            </Link>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
