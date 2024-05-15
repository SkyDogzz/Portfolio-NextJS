export default function Description({ description }: { description: string }) {
    return (
        <p className="text-2xl font-light text-justify tracking-wide">{description}</p>
    );
}