import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Animation from "@/components/Animation";

function Page() {
  return (
    <Animation>
      <section className="container px-4 py-10 mx-auto min-h-screen flex flex-col lg:flex-row lg:space-x-8 lg:items-center">
        {/* Intro Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight mt-12 text-primary underline">
            CoderTrust
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            Welcome to our organization! We are dedicated to delivering
            innovative solutions and fostering meaningful relationships with our
            community. Through passion, perseverance, and teamwork, we strive to
            make a positive impact.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              To inspire, innovate, and create meaningful solutions that
              positively impact society.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              To be a leader in fostering creativity and innovation, shaping a
              brighter future for everyone.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              Integrity, inclusivity, and excellence drive everything we do to
              achieve success together.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our History</CardTitle>
            </CardHeader>
            <CardContent>
              Established with a vision, we have grown into a community-driven
              organization making a difference.
            </CardContent>
          </Card>
        </div>
      </section>
    </Animation>
  );
}

export default Page;
