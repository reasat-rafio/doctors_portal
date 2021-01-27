import Head from "next/head";
import { useCtx } from "../../store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setSnackbar } from "../../store/actions/snackbar";
import { DashBoardLayout } from "../../components/Layout/DashBoardLayout";

interface RedirectProps {
   to: string;
}

const Redirect: React.FC<RedirectProps> = ({ to }) => {
   const router = useRouter();

   useEffect(() => {
      router.replace(to);
   }, [to]);
   return null;
};

const Index: React.FC = ({}) => {
   const {
      userState: { isLoggedIn },
      snackbarDispatch,
   } = useCtx();

   if (!isLoggedIn) {
      return <Redirect to="/auth/login" />;
   }

   return (
      <>
         <Head>
            <title>Dashboard</title>
         </Head>
         <DashBoardLayout>
            <div>"asdasd</div>
         </DashBoardLayout>
      </>
   );
};

export default Index;
