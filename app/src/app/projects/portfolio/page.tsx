import Title from "@/app/components/projects/Title";
import Description from "@/app/components/projects/Description";
import Techno from "@/app/components/projects/Techno";
import Links from "@/app/components/projects/Links";

export default function Portfolio() {
    const descriptions = [
        "Welcome to my portfolio, a digital showcase of my web development skills and achievements. Designed specifically for freelance clients and companies seeking technical talent, this portfolio highlights a variety of my projects, from interactive websites to more technical programming in assembly.",
        "Utilizing advanced technologies such as React, Next.js, and Three.js, each project demonstrates my ability to create rich and engaging user experiences. The dynamic hero section, powered by Three.js, exemplifies my skill in incorporating complex and interactive visual elements.",
        "This portfolio is crafted to be intuitive and easy to navigate, allowing visitors to quickly discover my work and appreciate the breadth of my expertise. Whether you are looking for front-end development expertise or specific programming skills, you will find relevant examples of my work here.",
        "I invite you to explore my projects, learn more about my approaches, and contact me to discuss your development needs. Let's turn your ideas into reality."
    ];

    const links = [
        {
            name: "View Source Code",
            url: "https:////github.com/SkyDogzz/Portfolio-NextJS",
            blank: true,
        }, {
            name: "View Live Site",
            url: "/",
            blank: false,
        }
    ]

    return (
        <section className="flex flex-col justify-center gap-10 py-20">
            <Title title="This Portfolio" />
            {descriptions.map((description, index) => (
                <Description key={index} description={description} />
            ))}
            <Techno name={"Portfolio"} />
            <Links links={links} />
        </section>
    );
}