import Animation from "@/components/animation";
import { Button } from "@/components/ui/button";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const teamMembers = [
  {
    name: "Holden Caulfield",
    role: "UI Developer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    image: "https://dummyimage.com/200x200",
  },
  {
    name: "Jane Doe",
    role: "Frontend Engineer",
    description:
      "Pinterest vegan tacos tilde echo direct trade disrupt roof party sartorial street art.",
    image: "https://dummyimage.com/201x201",
  },
  {
    name: "John Smith",
    role: "Backend Developer",
    description:
      "Banjo taxidermy craft beer microdosing bespoke roof party direct trade meh keytar.",
    image: "https://dummyimage.com/202x202",
  },
  {
    name: "Emily Rose",
    role: "Full Stack Developer",
    description:
      "Everyday carry tote bag brunch raclette master cleanse sriracha mustache affogato.",
    image: "https://dummyimage.com/203x203",
  },
];

function Page() {
  return (
    <Animation>
      <section className="h-screen body-font">
        <div className="container px-5 py-24 mx-auto h-full">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 tracking-widest font-mono underline text-center">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Meet the dynamic individuals driving our success and shaping the
              future of our organization.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt={member.name}
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={member.image}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg font-mono underline-offset-2">
                      {member.name}
                    </h2>
                    <h3 className="mb-3 underline">{member.role}</h3>
                    <p className="mb-4">{member.description}</p>
                    <span className="inline-flex space-x-4">
                      <Button variant="outline" size="icon">
                        <Link href={"#"}>
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Link href={"#"}>
                          <FontAwesomeIcon icon={faGithub} />
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Link href={"#"}>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Animation>
  );
}

export default Page;
