import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";

export default function ContactButtons() {
  return (
    <div className="flex gap-5">
      <HeroButton url="/" icon={<FaGithub />} name="Github" />
      <HeroButton url="/" icon={<FaLinkedin />} name="Linkedin" />
      <HeroButton url="/" icon={<FaEnvelope />} name="thomas.stephan@live.fr" />
      <HeroButton url="/" icon={<FaDiscord />} name="Discord" />
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
      <Link href={url}>
        <button className="flex gap-2 items-center bg-sky-600 py-1 px-3 rounded-full">
          {icon}
          {name}
        </button>
      </Link>
    );
  }
  