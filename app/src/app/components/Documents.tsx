import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export default function Documents() {
    return (
        <section
            id="documents"
            className={
                roboto.className + " skills flex flex-col justify-center gap-10 py-20"
            }
        >
            <h1 className=" text-4xl text-center">Documents</h1>
            <div className="flex flex-col gap-5">
                <a
                    href="/documents/Resume.pdf"
                    target="_blank"
                    className="btn btn-primary"
                >
                    Resume
                </a>
                <a
                    href="/documents/assessfirst_softskills.pdf"
                    target="_blank"
                    className="btn btn-primary"
                >
                    Soft Skills Assessfirst
                </a>
            </div>
        </section>
    );
}