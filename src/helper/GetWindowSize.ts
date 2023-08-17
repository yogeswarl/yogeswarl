import { useEffect,useState } from "react";
import { mobile } from "@/types/interface";
export const GetWindowSize = () => {

const [isMobile, setIsMobile] = useState<mobile>({
  width: undefined,
  height: undefined,
});
useEffect(() => {
  const handleResize = () => {
    setIsMobile({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  window.addEventListener("resize", handleResize);
  handleResize();
  return () => window.removeEventListener("resize", handleResize);
}, []);
return isMobile;
};