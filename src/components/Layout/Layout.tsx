import { Navmenu } from "../Navbar/Navmenu";

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <>
         <Navmenu />
         {children}
      </>
   );
};
