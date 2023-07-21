import * as React from "react";
import { ComponentProps } from "@/types/interface";
export const Modal : React.FC<ComponentProps> = ({
  classname,
  children,
}): JSX.Element => {
  const [popupVisible, setPopupVisible] = React.useState<boolean>(false)
  function togglePopup() {
    setPopupVisible(!popupVisible)
  }
  return (
    
    <div className={`${Array.isArray(classname) ? classname.join(" "): classname}`}>
      <button onClick={togglePopup}>Click</button>
      {popupVisible && (children)}
    </div>
  );
}
