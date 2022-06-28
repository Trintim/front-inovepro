import { HeartIcon, MailIcon, MapIcon, PhoneIcon } from "./icons/index";
import LogoFooter from "./LogoFooter";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaHeart,
  FaFacebookSquare,
} from "react-icons/fa";

export default function Footer() {
  let year = new Date
  return (
    <div className="bg-zinc-900">
      <div className="max-w-7xl mx-auto pt-10 pb-2 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:gap-4 lg:grid-cols-3 border-b-2 border-rose-600 py-10 px-4">
          <div className="mx-2 flex items-center justify-center lg:items-start">
            <LogoFooter width={225} height={225} />
          </div>
          <div className="lg:hidden flex items-center justify-center pb-4 gap-4">
            <a href="#" className="mr-4 py-4">
              <FaFacebookF className="text-gray-200 hover:text-rose-600 lg:text-xl text-base" />
            </a>
            <a href="#" className="mx-4 py-4">
              <FaInstagram className="text-gray-200 hover:text-rose-600 lg:text-xl text-base" />
            </a>
            <a href="#" className="mx-4 py-4">
              <FaLinkedinIn className="text-gray-200 hover:text-rose-600 lg:text-xl text-base" />
            </a>
            <a href="#" className="mx-4 py-4">
              <FaPinterestP className="text-gray-200 hover:text-rose-600 lg:text-xl text-base" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start py-4 lg:py-0 mx-2 px-4 lg:pr-8 lg:px-0">
            <h4 className="text-rose-600 text-2xl py-2">Sobre Nós</h4>
            <p className="text-justify py-2 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              laborum accusantium voluptatibus iusto blanditiis fugiat mollitia
              voluptas recusandae in. Repellendus molestias, voluptatum eius rem
              corrupti fugit pariatur nisi assumenda reprehenderit.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start py-4 lg:py-0 mx-2 px-4 lg:px-0">
            <h4 className="text-rose-600 text-2xl py-2">Contato</h4>
            <ul className="flex flex-col text-rose-600 py-2">
              <li className="pb-2 flex items-center">
                {MapIcon(8)}
                <a href="#" className="text-gray-200 text-xs lg:text-sm pl-2">
                  Alto Universitário 29500-000 Alegre, ES
                </a>
              </li>
              <li className="py-2 flex items-center">
                {MailIcon(8)}
                <a href="#" className="text-gray-200 text-xs lg:text-sm pl-2">
                  contato@inovepro.com
                </a>
              </li>
              <li className="py-2 flex items-center">
                {PhoneIcon(8)}
                <a href="#" className="text-gray-200 text-xs lg:text-sm pl-2">
                  (44) 3011-5045
                </a>
              </li>
            </ul>
            <h4 className="hidden lg:flex text-rose-600 text-2xl py-2">
              Nossas redes sociais
            </h4>
            <div className="hidden lg:flex gap-4">
              <a href="#" className="mr-4 py-4">
                <FaFacebookF className="text-gray-200 hover:text-rose-600 lg:text-xl text-base" />
              </a>
              <a href="#" className="mx-4 py-4">
                <FaInstagram className="text-gray-200 hover:text-rose-600 lg:text-xl text-base" />
              </a>
              <a href="#" className="mx-4 py-4">
                <FaLinkedinIn className="text-gray-200 hover:text-rose-600 lg:text-xl text-base" />
              </a>
              <a href="#" className="mx-4 py-4">
                <FaPinterestP className="text-gray-200 hover:text-rose-600 lg:text-xl text-base" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-9 items-center">
          <div className="flex items-center text-xxs lg:text-xs text-rose-600 col-start-1 col-end-9">
            Desenvolvido com <FaHeart className="mx-1"/>{" "}
            {new Date().getFullYear()} Adapti-Soluções Web
          </div>
          <div className="flex justify-end col-start-9 col-end-10">
            <a href="#" className="mr-4 py-4">
              <FaFacebookSquare className="text-rose-600 hover:text-gray-200 lg:text-xl text-base" />
            </a>
            <a href="#" className="ml-4 py-4">
              <FaInstagram className="text-rose-600 hover:text-gray-200 lg:text-xl text-base" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
