import { useEffect, useRef } from "react";
import "../index.css";
export default function Header() {
  const headerRef = useRef();
  useEffect(() => {
    document.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "40px 0";
      }
    })
  })
  return (
    <header   ref={headerRef} className="w-full fixed left-0 z-50 top-0 transition-all duration-200 pt-[40px] font-roboto">
      <div className="container flex justify-between items-center m-auto text-white p-2 flex-col gap-[30px] md:flex-row ">
      
        <div><img src="assets/logo.svg"            className="w-[175px] h-[66px] object-contain"/>
      </div>

      <div>
        <ul className="flex gap-[20px]">
          <li className="cursor-pointer  hover:underline hover:underline-offset-[4px]  transition-all duration-200  font-semibold opacity-90 hover:opacity-[100]"><a className="cursor-pointer">Feature</a></li>   
          <li className="cursor-pointer  hover:underline hover:underline-offset-[4px]  transition-all duration-200  font-semibold opacity-90 hover:opacity-[100]"><a className="cursor-pointer">Team</a></li>  
      <li className="cursor-pointer  hover:underline hover:underline-offset-[4px]  transition-all duration-200  font-semibold opacity-90 hover:opacity-[100]"><a className="cursor-pointer">Sign in</a></li>  
      </ul>
    </div>
      </div>
    </header>
  )
}
