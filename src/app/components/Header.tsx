import Link from 'next/link'

export default function Header() {
    return (
        <header className="header flex justify-between py-5">
            <h1>Thomas Stephan</h1>

            <nav>
                <ul className="flex gap-5">
                    <HeaderLi url="#skills" number={0} name="Skills" />
                    <HeaderLi url="#projects" number={1} name="Projects" />
                    <HeaderLi url="#contact" number={2}  name="Contact" />
                </ul>
            </nav>
        </header>
    )
}

interface HeaderLiProps {
    url: string
    number: number
    name: string
}

function HeaderLi({ url, number, name }: HeaderLiProps)
{
    return (
        <li><Link href={url}><span className='text-sky-400 pr-2'>{number}.</span>{name}</Link></li>
    )
}