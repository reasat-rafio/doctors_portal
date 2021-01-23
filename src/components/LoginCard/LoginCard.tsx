import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { loginCardStyles } from "../../utils/styles";
import { Grid, Link, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../utils/yupSchema";
import axios from "axios";
import Cookies from "js-cookie";

interface LoginCardProps {}
interface LoginDataInterFace {
   email: string;
   password: string;
}

export const LoginCard: React.FC<LoginCardProps> = ({}) => {
   const classes = loginCardStyles();

   // Setting up Yup as useFrom resolver
   const { handleSubmit, register, errors } = useForm({
      resolver: yupResolver(LoginSchema),
   });

   // on the form submit
   const onSubmit = async (user: LoginDataInterFace) => {
      const { data } = await axios.post(
         `${process.env.BASE_URL}/api/auth/login`,
         user
      );

      Cookies.set("token", data.token, { expires: 7 });
   };

   return (
      <section className="login-card">
         <Card className={classes.root}>
            <CardContent>
               <Typography className={classes.title} gutterBottom>
                  Login
               </Typography>

               <form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2}>
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
                     </Grid>

                     {errors.email && (
                        <Typography variant="body2" color="secondary">
                           {errors.email.message}
                        </Typography>
                     )}

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
                     </Grid>

                     {errors.password && (
                        <Typography variant="body2" color="secondary">
                           {errors.password.message}
                        </Typography>
                     )}
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     className="btn"
                  >
                     Sign Up
                  </Button>
                  <Grid container justify="flex-end">
                     <Grid item>
                        <Link href="#" variant="body2">
                           Already have an account? Sign in
                        </Link>
                     </Grid>
                  </Grid>
               </form>
            </CardContent>
         </Card>
      </section>
   );
};
