import Image from "next/image";
import React from "react";
interface Props {
  src: string;
  height: number;
  width: number;
}
function SVGIcon({ src, height, width }: Props) {
  return <Image src={src} height={height} width={width} alt="icon" />;
}

export default SVGIcon;
