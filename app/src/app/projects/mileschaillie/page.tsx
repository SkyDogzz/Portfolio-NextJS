import Title from "@/app/components/projects/Title";
import Title2 from "@/app/components/projects/Title2";
import Description from "@/app/components/projects/Description";
import Techno from "@/app/components/projects/Techno";
import Links from "@/app/components/projects/Links";

export default function Portfolio() {
    const descriptions1 = ["Welcome to the professional portfolio of Miles Chaillié, a freshly graduated mechatronics engineer. This digital portfolio is crafted to establish a compelling online presence for his job search, showcasing his engineering projects and technical skills."];
    const descriptions2 = ["Developed using Next.js and TypeScript, this portfolio features a custom backend integrated with a PostgreSQL database managed through Prisma. It utilizes Tailwind CSS for styling, ensuring a clean and modern visual appeal that aligns with professional standards."]
    const descriptions3 = ["The portfolio includes a fully handcrafted backend that interacts with a custom API using route handlers. This setup enables easy modifications, additions, and deletions of portfolio content such as about details, projects, tags, and dates, offering seamless content management."]
    const descriptions4 = ["Designed in close collaboration with Mr. Chaillié, the visual layout is simple yet effective, emphasizing usability and professionalism. Tailwind CSS supports a responsive and adaptable design that looks great on all devices."]
    const descriptions5 = ["This portfolio serves as a vital tool for Mr. Chaillié to highlight his engineering expertise and projects to potential employers. It is designed not only to showcase his technical skills but also to facilitate networking and career opportunities in the field of mechatronics engineering."]
    
    const links = [
        {
            name: "View Source Code",
            url: "https://gitlab.com/SkyDogzz/portfolio-nextjs-miles-chaillie",
            blank: true,
        }, {
            name: "View Live Site",
            url: "https://mileschaillie.com",
            blank: true,
        }
    ]

    return (
        <section className="flex flex-col justify-center gap-10 py-20">
            <Title title="This Portfolio" />
            {descriptions1.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <Title2 title="Technologies" />
            {descriptions2.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <Title2 title="Backend" />
            {descriptions3.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <Title2 title="Design" />
            {descriptions4.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <Title2 title="Purpose" />
            {descriptions5.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <Techno name={"Portfolio Miles Chaillié"} />
            <Links links={links} />
        </section>
    );
}