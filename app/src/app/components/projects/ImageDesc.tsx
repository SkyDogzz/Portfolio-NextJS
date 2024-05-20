import Image from 'next/image';

export default function ImageDesc({ src, alt, mid }: { src: string, alt: string, mid?: boolean}) {
    return (
        <Image src={src} alt={alt} className={`mx-auto ${mid ? "w-1/2 h-auto" : "w-full h-auto"}`} width={mid ? 960 : 1920} height={mid ? 540 : 1080} quality={100} />
    );
}