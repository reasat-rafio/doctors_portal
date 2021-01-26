import { useRef, useEffect, useState } from "react";
import { useResize } from "../../utils/useResize";
import SmNavMenu from "./SmNavMenu";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { useCtx } from "../../store";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { useRouter } from "next/router";

interface NavmenuProps {}

export const Navmenu: React.FC<NavmenuProps> = ({}) => {
   const myRef = useRef<any>(null);
   const { width, height } = useResize(myRef);
   const router = useRouter();

   const {
      userState: { isLoggedIn },
   } = useCtx();

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
                  <li>
                     {isLoggedIn ? (
                        <Button
                           variant="outlined"
                           color="secondary"
                           startIcon={<ExitToAppIcon />}
                        >
                           Logout
                        </Button>
                     ) : (
                        <Button
                           variant="outlined"
                           color="secondary"
                           startIcon={<AssignmentIndIcon />}
                           onClick={() => router.push("auth/login")}
                        >
                           Login
                        </Button>
                     )}
                  </li>
               </>
            ) : (
               <SmNavMenu />
            )}
         </ul>
      </div>
   );
};
