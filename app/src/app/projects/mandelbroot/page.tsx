import Title from "@/app/components/projects/Title";
import Description from "@/app/components/projects/Description";
import Techno from "@/app/components/projects/Techno";
import Links from "@/app/components/projects/Links";
import ImageDesc from "@/app/components/projects/ImageDesc";

export default function Mandelbroot() {
    const descriptions = [
        "This project showcases a implementation of the Mandelbrot set, entirely coded in NASM x86 assembly language.",
        "Demonstrating my deep understanding of low-level programming and efficiency optimization, this endeavor not only captures the intricacies of fractal geometry but also highlights my capability to handle computationally intensive tasks with precision.",
        "Using minimal resources, the project delivers a mesmerizing visualization of the Mandelbrot set, proving that even the most traditional programming environments can produce cutting-edge graphical outputs.",
        "Ideal for those who appreciate the elegance of assembly language, this project exemplifies how meticulous coding can translate into visually compelling results."

    ]

    const links = [
        {
            name: "View Source Code",
            url: "https://github.com/SkyDogzz/mandelbroot/",
            blank: true
        }
    ]

    return (
        <section className="flex flex-col justify-center gap-10 py-20">
            <Title title="This Portfolio" />
            {descriptions.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <ImageDesc src="/images/mandelbroot.png" alt="Mandelbroot visualizer" />
            <Techno name={"Mandelbroot visualizer"} />
            <Links links={links} />
        </section>
    );
}