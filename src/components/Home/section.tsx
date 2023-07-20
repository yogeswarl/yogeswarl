
import * as React from "react";
import { TagClassnames } from "@/types/interface";
interface Props extends TagClassnames {
  children: React.ReactNode
}
export const MainSection : React.FC<Props> = ({
  classname,
  children,
}): JSX.Element => {
  return <section className={`${Array.isArray(classname) ? classname.join(" "): classname}`}>{children}</section>;
}

        
