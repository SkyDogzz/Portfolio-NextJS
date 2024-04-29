import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "700" });
import Link from "next/link";

export default function Documents() {
    return (
        <section
            id="documents"
            className={
                roboto.className + " skills flex flex-col justify-center gap-10 py-20"
            }
        >
            <h1 className=" text-4xl text-center">Documents</h1>
            <div className="flex justify-center gap-5">
                <Button
                    url="/documents/Resume.pdf"
                    icon={<i className="fas fa-file-pdf"></i>}
                    name="Resume"
                />
                <Button
                    url="/documents/assessfirst_softskills.pdf"
                    icon={<i className="fas fa-file-pdf"></i>}
                    name="Soft Skills Assessfirst"
                />
            </div>
        </section>
    );
}

type ButtonProps = {
    url: string;
    icon: JSX.Element;
    name: string;
};

function Button({ url, icon, name }: ButtonProps) {
    return (
        <Link href={url} target="_blank">
            <button className="flex gap-2 items-center bg-emerald-600 py-1 px-3 rounded-full sm:hover:scale-110 transition-all">
                {icon}
                {name}
            </button>
        </Link>
    );
}
