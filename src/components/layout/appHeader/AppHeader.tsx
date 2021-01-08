interface AppHeaderProps {}
import MenuIcon from "@material-ui/icons/Menu";

import { useRef, useEffect, useState } from "react";
import { useResize } from "../../hooks/useResize";

export const AppHeader: React.FC<AppHeaderProps> = ({}) => {
   const ref = useRef<HTMLHeadingElement>(null);
   const { width, height } = useResize(ref);
   console.log(width);

   return (
      <div ref={ref}>
         <nav className="navBar">
            <ul className="nav">
               <li>
                  <a href="#home">Home</a>
               </li>
               <li>
                  <a href="#about">About</a>
               </li>
               <li>
                  <a href="#servies">Dental Sevices</a>{" "}
               </li>
               <li>
                  <a href="#reviews">Reviews</a>
               </li>
               <li>
                  <a href="#blogs"> Blogs</a>
               </li>
               <li>
                  <a href="#contact-us">Contact Us </a>
               </li>
            </ul>
         </nav>
         <MenuIcon fontSize="large" />
      </div>
   );
};
