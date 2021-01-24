import { Grid } from "@material-ui/core";
import Image from "next/image";
import Head from "next/head";
import { RegisterCard } from "../../components/RegisterCard/RegisterCard";
import { loginCardStyles } from "../../utils/styles";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
   const classes = loginCardStyles();
   return (
      <div className="login ">
         <Head>
            <title>Login | Doctors Portal</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Grid container className="lgCnt">
            <Grid
               container
               direction="row"
               justify="center"
               alignItems="center"
               className={classes.loginContaienr}
            >
               <Grid item xs={12} md={6}>
                  <RegisterCard />
               </Grid>
               <Grid item xs={false} md={6}>
                  <div className="imgContaienr">
                     <Image
                        src="/Group.png"
                        height={1}
                        width={1}
                        layout="responsive"
                     />
                  </div>
               </Grid>
            </Grid>
         </Grid>
      </div>
   );
};
export default Login;
