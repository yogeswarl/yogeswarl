"use client";
import * as React from "react";
import {useIntersectionObserver} from "@/helper/use-hooks";
import { ComponentProps } from "@/types/interface";
import Style from '../../app/page.module.scss'

export const MainSection : React.FC<ComponentProps> = ({
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

        
