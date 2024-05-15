type Link = {
    name: string;
    url: string;
    blank: boolean;
}

export default function Links({ links }: { links: Link[] }) {
    return (
        <div className="flex justify-center gap-4">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target={link.blank ? "_blank" : "_self"}
                    className="text-emerald-700 hover:text-emerald-600"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
}