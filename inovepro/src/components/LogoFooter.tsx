import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

interface LogoFooterProps {
  width?: number;
  height?: number;
}

export default function LogoFooter(props: LogoFooterProps) {
  return (
    <Image
      src="/img/logofooter.png"
      alt="Logo"
      width={props.width}
      height={props.height}
    />
  );
}
