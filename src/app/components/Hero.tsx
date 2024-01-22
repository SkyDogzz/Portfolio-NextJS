import { Roboto } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export default function Hero() {
  return (
    <section
      className={roboto.className + " hero flex flex-col justify-center gap-10 pb-20"}
    >
      <h1 className=" text-sky-400 text-xl">
        Hey There! I'm -<br /> <span className="text-8xl">Thomas Stephan</span>
      </h1>
      <p className="text-3xl">I'm a Fullstack Web Developer</p>
      <div className="flex gap-5">
        <HeroButton url="/" icon={<FaGithub />} name="Github" />
        <HeroButton url="/" icon={<FaLinkedin />} name="Linkedin" />
        <HeroButton url="/" icon={<FaEnvelope />} name="thomas.stephan@live.fr" />
        <HeroButton url="/" icon={<FaDiscord />} name="Discord" />
      </div>
    </section>
  );
}

interface HeroButtonProps {
  url: string;
  icon: React.ReactNode;
  name: string;
}

function HeroButton({ url, icon, name }: HeroButtonProps) {
  return (
    <Link href={url}>
      <button className="flex gap-2 items-center bg-sky-600 py-1 px-3 rounded-full">
        {icon}
        {name}
      </button>
    </Link>
  );
}
