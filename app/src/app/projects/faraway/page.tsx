import Title from "@/app/components/projects/Title";
import Description from "@/app/components/projects/Description";
import Techno from "@/app/components/projects/Techno";
import Links from "@/app/components/projects/Links";
import ImageDesc from "@/app/components/projects/ImageDesc";

export default function Mandelbroot() {
    const descriptions = [
        "",
    ]

    const links = [
        {
            name: "View Source Code",
            url: "https://github.com/SkyDogzz/Challenge-semestriel-HTML-CSS-JQuery/",
            blank: true
        },
        {
            name: "View Live",
            url: "https://far-away.fr",
            blank: true
        }
    ]

    return (
        <section className="flex flex-col justify-center gap-10 py-20">
            <Title title="Faraway" />
            {descriptions.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <Techno name={"Far Away"} />
            <Links links={links} />
        </section>
    );
}