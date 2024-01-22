import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "700" });
import ContactButtons from "./ContactButtons";

export default function Hero() {
  return (
    <section
      className={roboto.className + " hero flex flex-col justify-center gap-10 pb-20"}
    >
      <h1 className=" text-sky-400 text-xl">
        Hey There! I'm -<br /> <span className="text-8xl">Thomas Stephan</span>
      </h1>
      <p className="text-3xl">I'm a Fullstack Web Developer</p>
      <ContactButtons/>
    </section>
  );
}
