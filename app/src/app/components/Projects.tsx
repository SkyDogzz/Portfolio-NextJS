import { Roboto } from "next/font/google";
import React from "react";
const roboto = Roboto({ subsets: ["latin"], weight: "700" });
import * as FaIcons from "react-icons/fa6";
import projects from "@/app/data/projects.json";
import iconMap from "@/app/components/iconMap";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="skills flex flex-col justify-center gap-10 py-20"
    >
      <h1 className={roboto.className + " text-4xl text-center"}>Projects</h1>
      <div className="cards grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  icon: string;
  techs: string[];
  blank?: boolean
}

function Project({ name, description, link, icon, techs, blank }: ProjectProps) {
  const IconComponent = iconMap[icon];

  return (
    <div className="card rounded-2xl bg-emerald-900 min-w-52 p-4 border border-emerald-300 sm:hover:scale-110 transition-all" key={name}>
      <div className="cardHeader flex justify-between">
        {IconComponent && <IconComponent />}
        <Link href={link} target={blank ? "_blank" : ""}>
          <FaIcons.FaLink className="cursor-pointer" />
        </Link>
      </div>
      <div className="cardBody pt-5">
        <h2 className={roboto.className + " text-2xl"}>{name}</h2>
        <p>{description}</p>
        <div className="badges flex flex-wrap gap-2 pt-1">
          {techs.map((tech) => (
            <span className="badge bg-emerald-700 sm:placeholder:hover:bg-emerald-600 px-2 py-1 rounded-xl gap-2" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
