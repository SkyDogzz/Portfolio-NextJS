import projects from "@/app/data/projects.json";

type Project = {
    name: string;
    techs: string[];
}

export default function Techno({ name }: { name: string }) {
    const project = projects.find((project: Project) => project.name === name);

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {project?.techs.map((tech) => (
                <span className="bg-emerald-700 sm:placeholder:hover:bg-emerald-600 px-4 py-1 rounded-full gap-2" key={tech}>
                    {tech}
                </span>
            ))}
        </div>
    );
}