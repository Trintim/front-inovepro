import { MailIcon, MapIcon, PhoneIcon } from "./icons/index";
import LogoFooter from "./LogoFooter";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer(){
 return (
   <div className="bg-zinc-900">
     <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-3 gap-4">
         <div className="mx-2">
           <LogoFooter width={275} height={275} />
         </div>
         <div className="mx-2">
           <h4 className="text-rose-600 text-2xl py-2">Sobre Nós</h4>
           <p className="text-justify py-2">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
             laborum accusantium voluptatibus iusto blanditiis fugiat mollitia
             voluptas recusandae in. Repellendus molestias, voluptatum eius rem
             corrupti fugit pariatur nisi assumenda reprehenderit.
           </p>
         </div>
         <div className="mx-2">
           <h4 className="text-rose-600 text-2xl py-2">Contato</h4>
           <ul className="flex flex-col text-rose-600 py-2">
             <li className="pb-2 flex">
               {MapIcon(6)}
               <a href="#" className="text-gray-200 text-sm pl-2">
                 Alto Universitário 29500-000 Alegre, ES
               </a>
             </li>
             <li className="py-2 flex">
               {MailIcon(6)}
               <a href="#" className="text-gray-200 text-sm pl-2">
                 contato@inovepro.com
               </a>
             </li>
             <li className="py-2 flex">
               {PhoneIcon(6)}
               <a href="#" className="text-gray-200 text-sm pl-2">
                 (44) 3011-5045
               </a>
             </li>
           </ul>
           <h4 className="text-rose-600 text-2xl py-2">Nossas redes sociais</h4>
           <div className="flex gap-4">
             <a href="#" className="mr-4">
               <FaFacebookF className="text-gray-200 hover:text-rose-600 text-xl" />
             </a>
             <a href="#" className="mx-4">
               <FaInstagram className="text-gray-200 hover:text-rose-600 text-xl" />
             </a>
             <a href="#" className="mx-4 text-gray-200">
               <FaLinkedinIn className="text-gray-200 hover:text-rose-600 text-xl" />
             </a>
             <a href="#" className="mx-4 text-gray-200">
               <FaPinterestP className="text-gray-200 hover:text-rose-600 text-xl" />
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}