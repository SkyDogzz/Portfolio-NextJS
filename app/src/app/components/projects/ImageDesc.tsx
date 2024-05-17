import Image from 'next/image';

export default function ImageDesc({ src, alt }: { src: string, alt: string }) {
    return (
        <Image src={src} alt={alt} className="w-full h-auto" width={1920} height={1080} layout="responsive" quality={100} />
    );
}