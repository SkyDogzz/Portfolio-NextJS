import Title from "@/app/components/projects/Title";
import Title2 from "@/app/components/projects/Title2";
import Description from "@/app/components/projects/Description";
import Techno from "@/app/components/projects/Techno";
import Links from "@/app/components/projects/Links";
import ImageDesc from "@/app/components/projects/ImageDesc";

export default function Mandelbroot() {
    const descriptions1 = [
        "Welcome to \"Faraway,\" a project dedicated to revolutionizing the way travel websites are designed. This project showcases a prototype for a user-friendly travel site, utilizing the power of Sass along with HTML, CSS, and JavaScript to deliver a seamless and aesthetically pleasing online experience.",
    ]

    const descriptions2 = [
        "Leveraging the capabilities of Sass for advanced styling, combined with efficient HTML and CSS structuring and dynamic JavaScript functionality, this project epitomizes modern web design techniques. The use of Sass allows for more organized and maintainable style sheets, ensuring that our design is both scalable and easy to update.",
    ]

    const descriptions3 = [
        "\"Faraway\" features a set of highly cohesive, easily integrable components with a provided markup in a styleGuide.html, enabling rapid development and deployment of travel-related websites. This modular approach not only enhances flexibility but also significantly speeds up the development process."
    ]

    const descriptions4 = [
        "One of the main challenges was to create a set of design elements that are both visually appealing and easily adaptable to different travel services. By providing a clear and detailed style guide, we ensured that each component could be seamlessly integrated, promoting consistency across the entire user interface."
    ]

    const links = [
        {
            name: "View Source Code",
            url: "https://github.com/SkyDogzz/Challenge-semestriel-HTML-CSS-JQuery/",
            blank: true
        },
        {
            name: "View Live Site",
            url: "https://far-away.fr",
            blank: true
        },
        {
            name: "View Live Site Style Guide",
            url: "https://far-away.fr/styleGuide.html",
            blank: true
        }
    ]

    return (
        <section className="flex flex-col justify-center gap-10 py-20">
            <Title title="Faraway: Travel Agency" />
            {descriptions1.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <ImageDesc src="/images/FarawayLogo.svg" alt="Faraway travel agency" mid/>
            <Title2 title="Sass-powered design" />
            {descriptions2.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <Title2 title="Modular components" />
            {descriptions3.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <ImageDesc src="/images/inputs.png" alt="Faraway travel agency" />
            <Title2 title="Design elements" />
            {descriptions4.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <Techno name={"Far Away"} />
            <Links links={links} />
        </section>
    );
}