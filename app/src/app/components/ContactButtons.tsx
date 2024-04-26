import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";

export default function ContactButtons() {
  return (
    <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
      <HeroButton
        url="https://github.com/skydogzz"
        icon={<FaGithub />}
        name="Github"
      />
      <HeroButton
        url="https://www.linkedin.com/in/thomas-stephan-8376b6172/"
        icon={<FaLinkedin />}
        name="Linkedin"
      />
      <HeroButton
        url="mailto:thomas.stephan@live.fr"
        icon={<FaEnvelope />}
        name="thomas.stephan@live.fr"
      />
      <HeroButton
        url="https://discordapp.com/users/489883265595998227"
        icon={<FaDiscord />}
        name="Discord"
      />
    </div>
  );
}

interface HeroButtonProps {
  url: string;
  icon: React.ReactNode;
  name: string;
}

function HeroButton({ url, icon, name }: HeroButtonProps) {
  return (
    <Link href={url} target="_blank">
      <button className="flex gap-2 items-center bg-emerald-600 py-1 px-3 rounded-full sm:hover:scale-110 transition-all">
        {icon}
        {name}
      </button>
    </Link>
  );
}
