import { Grid } from "@material-ui/core";
import Image from "next/image";
import { LoginCard } from "../../components/LoginCard/LoginCard";
import { loginCardStyles } from "../../utils/styles";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
   const classes = loginCardStyles();
   return (
      <div className="login ">
         <Grid container className="lgCnt">
            <Grid
               container
               direction="row"
               justify="center"
               alignItems="center"
               className={classes.loginContaienr}
            >
               <Grid item xs={12} md={6}>
                  <LoginCard />
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
