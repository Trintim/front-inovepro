import { useEffect, useState } from "react";
import React from "react";
import Link from "../../node_modules/next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import Logo from "./Logo";
import ButtonNav from "./ButtonNav";
import { CloseIcon, MenuIcon } from "./icons/index";
import { Disclosure } from "../../node_modules/@headlessui/react/dist/index";

export default function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const navigation = [
    "Ínicio",
    "Sobre Nós",
    "Serviços",
    "Portfólio",
    "Blog",
    "Contato",
  ];

  return (
    <>
      <header
        className={
          "relative top-4 mx-5 lg:top-0 lg:mx-0 z-30 bg-zinc-900 lg:bg-transparent transition-all" +
          (scrollActive ? "shadow-md pt-0" : "pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-2 sm:py-2">
          <div className="col-start-1 col-end-2 flex items-center">
            <Logo height={"64"} width={"64"} />
          </div>
          <ul className="col-start-3 col-end-9 hidden lg:flex items-center justify-center">
            {navigation.map((item, index) => (
              <LinkScroll
                key={index}
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink({ item });
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === { item }
                    ? " text-rose-500 animation-active "
                    : " text-gray-200 hover:text-rose-500 a")
                }
              >
                {item}
              </LinkScroll>
            ))}
          </ul>
          <div className="col-start-10 col-end-12 hidden lg:flex font-medium justify-end items-center">
            <ButtonNav>Contato</ButtonNav>
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="col-end-11 flex lg:hidden justify-end items-center text-white"
                >
                  {!open && MenuIcon(8)}

                  {open && CloseIcon(8)}
                </Disclosure.Button>

                <Disclosure.Panel>
                  <ul className="container lg:hidden flex flex-col items-start justify-center">
                    {navigation.map((item, index) => (
                      <LinkScroll
                        key={index}
                        activeClass="active"
                        to={item}
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                          setActiveLink({ item });
                        }}
                        className={
                          "px-4 py-2 mx-2 cursor-pointer animation-hover " +
                          (activeLink === { item }
                            ? " text-gray-200 hover:bg-rose-600 animation-active "
                            : " text-gray-200 hover:text-rose-500 a")
                        }
                      >
                        {item}
                      </LinkScroll>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </nav>
      </header>
    </>
  );
}
