import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import Logo from "./Logo";
import Link from "../../node_modules/next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonNav from "./ButtonNav";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Sobre Nós", href: "#", current: false },
  { name: "Serviços", href: "#", current: false },
  { name: "Portfólio", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contato", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  return (
    <>
      <div className="mt-8 h-16 px-5 lg:mt-0 lg:px-0 fixed top-0 bottom-0 right-0 left-0 z-30 ">
        <Disclosure as="nav" className="bg-zinc-900 bg-opacity-60">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex justify-center items-center">
                    <Logo height={64} width={64} />
                  </div>
                  <div className="flex items-center">
                    <div className="hidden lg:block">
                      <div className="ml-10 flex items-center space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? " text-rose-500"
                                : "text-gray-300  hover:text-rose-500",
                              "px-3 py-2 rounded-md text-base"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <ButtonNav>Contato</ButtonNav>
                    </div>
                  </div>
                  <div className="-mr-2 flex lg:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-rose-500 hover:text-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-8 w-8" aria-hidden="true" />
                      ) : (
                        <MenuAlt3Icon
                          className="block h-8 w-8"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-rose-600 text-gray-300"
                          : "text-gray-300  hover:text-gray-300 hover:bg-rose-500",
                        "block px-3 py-2 rounded-md text-base"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
