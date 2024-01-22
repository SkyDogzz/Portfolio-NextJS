"use client";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="header flex justify-between py-5">
      <h1>Thomas Stephan</h1>

      <nav>
        <ul className="flex gap-5">
          <HeaderLi url="skills" number={0} name="Skills" />
          <HeaderLi url="projects" number={1} name="Projects" />
          <HeaderLi url="contact" number={2} name="Contact" />
        </ul>
      </nav>
    </header>
  );
}

interface HeaderLiProps {
  url: string;
  number: number;
  name: string;
}

function HeaderLi({ url, number, name }: HeaderLiProps) {
  return (
    <li>
      <Link to={url} smooth={true} offset={50} duration={1000}>
        <span className="text-emerald-400 pr-2">{number}.</span>
        {name}
      </Link>
    </li>
  );
}
