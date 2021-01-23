import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { loginCardStyles } from "../../utils/styles";
import { Grid, Link, TextField } from "@material-ui/core";

interface LoginCardProps {}

export const LoginCard: React.FC<LoginCardProps> = ({}) => {
   const classes = loginCardStyles();
   return (
      <section className="login-card">
         <Card className={classes.root}>
            <CardContent>
               <Typography className={classes.title} gutterBottom>
                  Login
               </Typography>

               <form className={""} noValidate>
                  <Grid container spacing={2}>
                     <Grid item xs={12}>
                        <TextField
                           variant="standard"
                           required
                           fullWidth
                           id="email"
                           label="Email Address"
                           name="email"
                           autoComplete="email"
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant="standard"
                           required
                           fullWidth
                           name="password"
                           label="Password"
                           type="password"
                           id="password"
                        />
                     </Grid>
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
