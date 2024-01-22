import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export default function Projects() {
  return (<section id="projects" className="skills flex flex-col justify-center gap-10 pb-20">
  <h1 className={roboto.className + " text-4xl text-center"}>Projects</h1>
    </section>
  );
}
