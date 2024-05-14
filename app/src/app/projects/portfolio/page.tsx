import Title from "@/app/components/projects/Title";
import Description from "@/app/components/projects/Description";

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio flex flex-col justify-center gap-10 py-20">
            <Title title="Portfolio" />
            <Description description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, et quaerat, commodi mollitia aliquid ratione corrupti inventore, esse illo alias corporis tenetur velit quibusdam? Repellat eveniet facilis eius voluptatum nesciunt?
        Nostrum veritatis eveniet dolore ex beatae, harum, deserunt sed dicta, odit dignissimos accusamus suscipit? Doloremque enim quasi vitae beatae facilis. Recusandae animi quaerat quidem quasi minima! Error natus laborum eveniet?." />
        </section>
    );
}