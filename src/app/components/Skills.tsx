import { Roboto } from "next/font/google";
import React from "react";
import {
  FaReact,
  FaSass,
  FaLaravel,
  FaNodeJs,
  FaFigma,
  FaGithub,
} from "react-icons/fa";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export default function Skills() {
  return (
    <section
      id="skills"
      className={
        roboto.className + " skills flex flex-col justify-center gap-10 py-20"
      }
    >
      <h1 className=" text-4xl text-center">Skills</h1>

      <div className="flex justify-between">
        <SkillsLi
          category="Frontend"
          items={[
            {
              name: "Reactjs",
              icon: <FaReact />,
            },
            {
              name: "Nextjs",
              icon: "https://nextjs.org/static/favicon/favicon-32x32.png",
            },
            {
              name: "Tailwindcss",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
            },
            {
              name: "Sass",
              icon: <FaSass />,
            },
          ]}
          key={1}
        />
        <SkillsLi
          category="Backend"
          items={[
            {
              name: "Laravel",
              icon: <FaLaravel />,
            },
            {
              name: "Nodejs",
              icon: <FaNodeJs />,
            },
            {
              name: "Postgresql",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/233px-Postgresql_elephant.svg.png",
            },
          ]}
          key={2}
        />
        <SkillsLi
          category="Design"
          items={[
            {
              name: "Figma",
              icon: <FaFigma />,
            },
          ]}
        />
        <SkillsLi
          category="Other"
          items={[
            {
              name: "Git & Github",
              icon: <FaGithub />,
            },
          ]}
          key={3}
        />
      </div>
    </section>
  );
}

interface SkilslLiProps {
  category: string;
  items: {
    name: string;
    icon: React.ReactNode | string;
  }[];
}

function SkillsLi({ category, items }: SkilslLiProps) {
  return (
    <div>
      <h2 className="text-3xl pb-3">{category}</h2>
      <ul className="flex flex-col gap-1">
        {items.map((item) => {
          return (
            <li key={item.name}>
              <div className="flex gap-2 items-center py-1 text-xl">
                {typeof item.icon === "string" ? (
                  <img className="w-6" src={item.icon} alt={item.name} />
                ) : (
                  item.icon
                )}
                {item.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
