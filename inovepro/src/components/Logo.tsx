import Image from "../../node_modules/next/image"

interface LogoProps{
    className?: string
}

export default function Logo(props: LogoProps) {
    return (
        <Image className={props.className} src="/img/logoino.png" alt="Logo" width="64" height="64"/>
    )
}