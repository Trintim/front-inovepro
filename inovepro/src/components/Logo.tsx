import Image from "../../node_modules/next/image"

interface LogoProps {
  width?: string
  height?: string
}

export default function Logo(props: LogoProps) {
    return (
        <Image  src="/img/logoino.png" alt="Logo" width={props.width} height={props.height}/>
    )
}