import { useCtx } from "../../store";
import { Loading } from "../Loading/Loading";

import SnackBar from "../Snackbar/Snackbar";

interface LayoutProps {
   children: React.ReactNode;
}

export const GlobalLayout: React.FC<LayoutProps> = ({ children }) => {
   const {
      userState: { loading },
   } = useCtx();
   return (
      <>
         {loading && <Loading />}
         <SnackBar />
         {children}
      </>
   );
};
