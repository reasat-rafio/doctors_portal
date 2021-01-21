import { useRef, useEffect, useState } from "react";
import { useResize } from "../../utils/useResize";
import SmNavMenu from "./List";
import Link from "next/link";

interface NavmenuProps {}

export const Navmenu: React.FC<NavmenuProps> = ({}) => {
   const myRef = useRef<any>(null);
   const { width, height } = useResize(myRef);

   const [isSmDevice, setIsSmDevice] = useState<boolean>(false);

   useEffect(() => {
      if (myRef.current.offsetWidth < 950) {
         setIsSmDevice(true);
      }
   }, []);

   return (
      <div ref={myRef} className="navbar">
         <ul>
            {width > 950 ? (
               <>
                  <li>
                     <Link href="/">
                        <a>Home</a>
                     </Link>
                  </li>
                  <li>
                     <a href="#About">About</a>
                  </li>
                  <li>
                     <a href="#dental-services">Dental Services</a>
                  </li>
                  <li>
                     <a href="#reviews">Reviews</a>
                  </li>
                  <li>
                     <a href="#blog">Blog</a>
                  </li>
                  <li>
                     <a href="#contact-us">Contact Us</a>
                  </li>
               </>
            ) : (
               <SmNavMenu />
            )}
         </ul>
      </div>
   );
};
