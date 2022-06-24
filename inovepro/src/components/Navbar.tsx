import { Disclosure } from '@headlessui/react'
import { useState } from 'react';
import Logo from './Logo';
import Link from '../../node_modules/next/link';
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonNav from './ButtonNav';
import { CloseIcon, MenuIcon } from './icons/index';

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

export default function Navbar(){
    const [activeLink, setActiveLink] = useState(null);
    return (
      <>
        <div className="min-h-full mt-8 px-5 lg:mt-0 lg:px-0">
          <Disclosure as="nav" className="bg-slate-900">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-16">
                    <div className="flex justify-center items-center">
                      <Logo height={64} width={64} />
                    </div>
                    <div className="flex items-center">
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-center jus space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-rose-500"
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
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <ButtonNav>Contato</ButtonNav>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      <Disclosure>
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-rose-500 hover:text-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? <CloseIcon(8) /> : MenuIcon(8)}
                        </Disclosure.Button>
                      </Disclosure>
                    </div>
                  </div>
                </div>
                <Disclosure.Panel className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
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