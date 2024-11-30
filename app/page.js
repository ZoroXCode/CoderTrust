import Build from "@/components/Build";
import IconShowcase from "@/components/frameworks";
import TypeAnimation from "@/components/TypeAnimation";
import { Button } from "@/components/ui/button";
import FeaturesGrid from "@/components/WhyChooseus";
import Image from "next/image";
import Link from "next/link";
import Animation from "@/components/animation";

export default function Home() {
  return (
    <>
      <Animation>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center pt-28">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              A{" "}
              <span className="font-semibold text-primary font-mono">
                free_repository
              </span>{" "}
              for community <br className="hidden lg:block" /> components using{" "}
              <span className="font-semibold underline decoration-primary text-primary font-mono">
                <TypeAnimation />
              </span>
            </h1>
            <p className="mt-4 text-lg">
              Open source Tailwind UI components and templates to
              <br className="hidden lg:block" /> bootstrap your new apps,
              projects or landing sites!
            </p>
            <div className="flex justify-center lg:block">
              <div className="w-48 my-5 flex justify-between">
                <Button className="text-white">
                  <Link href={"/contact"}>Let&apos;s Talk</Link>
                </Button>
                <Button className="text-white">
                  <Link href={"/about"}>About Us</Link>
                </Button>
              </div>
            </div>
            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20 lg:hidden"></div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="tailwind css components"
              className="w-full h-full max-w-md mx-auto"
              width={500}
              height={500}
              priority
            />
          </div>
        </section>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div>
            <h1 className="text-3xl font-bold underline font-mono md:text-4xl">
              Why CoderTrust for your next project
            </h1>
            <div>
              <FeaturesGrid />
            </div>
          </div>
        </section>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <IconShowcase />
        </section>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <Build />
        </section>
      </Animation>
    </>
  );
}
