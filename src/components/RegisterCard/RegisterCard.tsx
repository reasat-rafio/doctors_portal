import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { loginCardStyles } from "../../utils/styles";
import { Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../utils/yupSchema";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useCtx } from "../../store";
import { setSnackbar } from "../../store/actions/snackbar";
import { useRouter } from "next/router";

interface RegisterCard {}

interface LoginDataInterFace {
   name: string;
   email: string;
   password: string;
}

export const RegisterCard: React.FC<RegisterCard> = ({}) => {
   const classes = loginCardStyles();
   const router = useRouter();
   const { state, dispatch } = useCtx();

   // Setting up Yup as useFrom resolver
   const { handleSubmit, register, errors } = useForm({
      resolver: yupResolver(RegisterSchema),
   });

   // on the form submit
   const onSubmit = async (user: LoginDataInterFace) => {
      try {
         const { data } = await axios.post(
            `${process.env.BASE_URL}/api/auth/register`,
            user
         );
         router.push("/auth/login");
      } catch (error) {
         dispatch(setSnackbar(true, "error", error.response.data.error));
      }

      //   Cookies.set("token", data.token, { expires: 7 });
   };

   return (
      <section className="login-card">
         <Card className={classes.root}>
            <CardContent>
               <Typography className={classes.title} gutterBottom>
                  Sign Up
               </Typography>

               <form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2}>
                     <Grid item xs={12}>
                        <TextField
                           color="secondary"
                           variant="standard"
                           required
                           fullWidth
                           label="User Name"
                           name="name"
                           autoComplete="name"
                           inputRef={register}
                        />
                        {errors.name && (
                           <Typography variant="body2" color="secondary">
                              {errors.name.message}
                           </Typography>
                        )}
                     </Grid>

                     <Grid item xs={12}>
                        <TextField
                           color="secondary"
                           variant="standard"
                           required
                           fullWidth
                           label="Email Address"
                           name="email"
                           autoComplete="email"
                           inputRef={register}
                        />
                        {errors.email && (
                           <Typography variant="body2" color="secondary">
                              {errors.email.message}
                           </Typography>
                        )}
                     </Grid>

                     <Grid item xs={12}>
                        <TextField
                           color="secondary"
                           variant="standard"
                           required
                           fullWidth
                           name="password"
                           label="Password"
                           type="password"
                           inputRef={register}
                        />
                        {errors.password && (
                           <Typography variant="body2" color="secondary">
                              {errors.password.message}
                           </Typography>
                        )}
                     </Grid>
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     className="btn"
                  >
                     Register
                  </Button>
                  <Grid container justify="flex-end">
                     <Grid item>
                        <Link href="/auth/login">
                           <a>Already have an account? Login</a>
                        </Link>
                     </Grid>
                  </Grid>
               </form>
            </CardContent>
         </Card>
      </section>
   );
};
