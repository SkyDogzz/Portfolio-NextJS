import ContactButtons from "./ContactButtons";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export default function Contact() {
  return (
    <section id="contact" className="skills flex flex-col justify-center gap-10 py-20">
      <h1 className={roboto.className + " text-4xl text-center"}>Contact</h1>
      <p className="text-center">
        Feel free to contact me by email or through my social networks.
      </p>
      <div className="flex justify-center">
        <ContactButtons />
      </div>
    </section>
  );
}
