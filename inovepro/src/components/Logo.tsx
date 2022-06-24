import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string
}

export default function Logo(props: LogoProps) {
  return (
    <Image
      src="/img/logoino.png"
      alt="Logo"
      width={props.width}
      height={props.height}
    />
  );
}
