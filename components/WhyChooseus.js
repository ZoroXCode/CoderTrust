import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faWindowMaximize,
  faDatabase,
  faRobot,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesGrid = () => {
  const features = [
    {
      icon: faBriefcase,
      title: "Bring Your Own Framework",
      description:
        "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
    },
    {
      icon: faWindowMaximize,
      title: "100% Static HTML, No JS",
      description:
        "Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.",
    },
    {
      icon: faDatabase,
      title: "On-Demand Components",
      description:
        "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.",
    },
    {
      icon: faRobot,
      title: "Broad Integration",
      description:
        "Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
    },
    {
      icon: faSearch,
      title: "SEO Enabled",
      description:
        "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
    },
    {
      icon: faUser,
      title: "Community",
      description:
        "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4 items-start">
          <div className="rounded-full p-2 w-8 h-8 shrink-0 text-primary bg-gray-200 dark:bg-gray-800">
            <FontAwesomeIcon icon={feature.icon} className="" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-slate-500 mt-2 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
