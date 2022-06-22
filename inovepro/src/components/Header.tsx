import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);


  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-gray-900 transition-all" +
          (scrollActive ? "shadow-md pt-0" : "pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Logo className="h-8 w-auto"/>
          </div>
        </nav>
      </header>
    </>
  );
}
