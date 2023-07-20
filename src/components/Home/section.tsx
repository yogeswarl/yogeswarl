"use client";
import * as React from "react";
import {useIntersectionObserver} from "@/helper/use-hooks";
import { TagClassnames } from "@/types/interface";
import Style from '../../app/page.module.scss'
interface Props extends TagClassnames {
  children: React.ReactNode
}

export const MainSection : React.FC<Props> = ({
  classname,
  children,
}): JSX.Element => {
  const ref = React.useRef<HTMLElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting
  console.log(`Render classes ${children}`, { isVisible })
  if(isVisible){
    console.log("Visible")
    ref.current?.classList.add(`${Style["slide-in"]}`)
  }
  else {
    ref.current?.classList.remove(`${Style["slide-in"]}`)
  }

  return <section ref = {ref} className={`${Array.isArray(classname) ? classname.join(" "): classname}`}>{children}</section>;
}

        
