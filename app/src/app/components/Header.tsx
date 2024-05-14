"use client";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header flex justify-between py-5">
      <Link href={"/"}>
        <h1>Thomas Stephan</h1>
      </Link>

      <nav>
        <ul className="flex gap-5">
          <HeaderLi url="skills" number={0} name="Skills" isHome={pathname === "/"} />
          <HeaderLi url="projects" number={1} name="Projects" isHome={pathname === "/"} />
          <HeaderLi url="contact" number={2} name="Contact" isHome={pathname === "/"} />
        </ul>
      </nav>
    </header>
  );
}

interface HeaderLiProps {
  url: string;
  number: number;
  name: string;
  isHome: boolean;
}

function HeaderLi({ url, number, name, isHome }: HeaderLiProps) {
  return (
    <li>
      {isHome ? (
        <LinkScroll to={url} smooth={true} offset={50} duration={1000}>
          <span className="text-emerald-400 pr-2">{number}.</span>
          {name}
        </LinkScroll>
      ) : (
        <Link href={`/#${url}`}>
          <span className="text-emerald-400 pr-2">{number}.</span>
          {name}
        </Link>
      )
      }
    </li>
  );
}
