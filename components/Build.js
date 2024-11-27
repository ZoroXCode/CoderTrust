import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Rocket } from "lucide-react";

function Build() {
  return (
    <div className="bg-secondary w-full h-fit p-10 rounded-lg">
      <p className="text-center text-primary text-6xl font-mono">Let's Build</p>
      <p className="text-center text-primary text-3xl font-mono mt-2">
        Your next project with CoderTrust
      </p>
      <div className="flex justify-center mt-10">
        <Button size="lg">
          <Link
            href="/contact"
            className="justify-center flex gap-2 items-center text-lg"
          >
            <Rocket />
            Let's Talk
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Build;
