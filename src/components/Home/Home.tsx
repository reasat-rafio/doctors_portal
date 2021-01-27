import { Grid } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import Image from "next/image";
import { Cards } from "./Cards";
import { HomeStyles } from "../../utils/styles";
import { card } from "./_Helper";
import { useRouter } from "next/router";
import { useCtx } from "../../store";
import {
   LOADING_END_ACTION,
   LOADING_START_ACTION,
} from "../../store/actions/userAction";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
   const classes = HomeStyles();
   const router = useRouter();
   const { userDispatch } = useCtx();

   // Go to appointment button action
   const getAppointmentAction = () => {
      userDispatch(LOADING_START_ACTION());
      router.push("/appointment");
      userDispatch(LOADING_END_ACTION());
   };

   return (
      <div className="home">
         <Grid container spacing={5} justify="center" alignItems="center">
            <Grid item md={5} xs={12} className="home_des">
               <Typography className="title" variant="h4" gutterBottom>
                  Your New Smile Starts Here
               </Typography>
               <Typography className="text" gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, quos blanditiis molestiae debitis assumenda delectus.
               </Typography>
               <Button className="home_btn" onClick={getAppointmentAction}>
                  Get appointment
               </Button>
            </Grid>
            <Grid item md={7} xs={12} className="home_img">
               <Image
                  src="/img1.png"
                  alt="Pic"
                  width={800}
                  height={390}
                  layout="intrinsic"
               />
            </Grid>
         </Grid>
         <Grid
            container
            spacing={2}
            className={classes.cardWitdh}
            justify="center"
            alignItems="center"
            style={{ marginTop: "30px" }}
         >
            {card.map((c, i) => (
               <Grid key={i} container item lg={4} md={6} xs={12}>
                  <Cards title={c.title} text={c.text} icon={c.icon} />
               </Grid>
            ))}
         </Grid>
      </div>
   );
};
