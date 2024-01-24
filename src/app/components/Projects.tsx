import { Roboto } from "next/font/google";
import React from "react";
const roboto = Roboto({ subsets: ["latin"], weight: "700" });
import { FaReact, FaLink } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="skills flex flex-col justify-center gap-10 pb-20"
    >
      <h1 className={roboto.className + " text-4xl text-center"}>Projects</h1>
      <div className="cards grid gap-10 grid-cols-3">
        <Project
          name="Portfolio"
          description="This Portfolio"
          link="/"
          icon={<FaReact />}
          techs={["Reactjs", "Nextjs", "Tailwindcss", "Sass"]}
        />
      </div>
    </section>
  );
}

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  techs: string[];
}

function Project({ name, description, link, icon, techs }: ProjectProps) {
  return (
    <div className="card rounded-2xl bg-emerald-900 min-w-52 p-4 border border-emerald-300 hover:scale-110 transition-all">
      <div className="cardHeader flex justify-between">
        {icon}
        <Link href={link}>
          <FaLink />
        </Link>
      </div>
      <div className="cardBody pt-5">
        <h2 className={roboto.className + " text-2xl"}>{name}</h2>
        <p>{description}</p>
        <div className="badges flex flex-wrap gap-2 pt-1">
          {techs.map((tech) => (
            <span className="badge bg-emerald-700 hover:bg-emerald-600 px-2 py-1 rounded-xl gap-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
