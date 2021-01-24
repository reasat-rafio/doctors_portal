import { Navmenu } from "../Navbar/Navmenu";
import SnackBar from "../Snackbar/Snackbar";

interface LayoutProps {
   children: React.ReactNode;
}

export const GlobalLayout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <>
         <SnackBar />
         {children}
      </>
   );
};
