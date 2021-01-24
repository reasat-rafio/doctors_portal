import { Navmenu } from "../Navbar/Navmenu";
import SnackBar from "../Snackbar/Snackbar";

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <>
         <Navmenu />
         <SnackBar />
         {children}
      </>
   );
};
