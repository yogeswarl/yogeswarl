import * as React from "react";
import Image from "next/image";
import { TagClassnames } from "@/types/interface";

export const Stars: React.FC<TagClassnames> = ({classname}): JSX.Element => {
  return (
    <Image src="/star.svg" loading='eager' alt="twinkling stars" width={10} height={10} className={`${Array.isArray(classname) ? classname.join(" "): classname}`} />
  )
}