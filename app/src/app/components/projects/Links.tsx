import Link from "next/link";

type Links = {
    name: string;
    url: string;
    blank: boolean;
}

export default function Links({ links }: { links: Links[] }) {
    return (
        <div className="flex justify-center gap-4">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.url}
                    target={link.blank ? "_blank" : "_self"}
                    className="text-emerald-700 hover:text-emerald-600"
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
}