import { Grid } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import Image from "next/image";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import { Cards } from "./Cards";
import { HomeStyles } from "../../utils/styles";
interface HomeProps {}

const card = [
   {
      icon: <LocationOnIcon fontSize="large" />,
      title: "Whats our location",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
   },
   {
      icon: <AccessTimeIcon fontSize="large" />,
      title: "Opening Hours",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
   },
   {
      icon: <PhoneInTalkIcon fontSize="large" />,
      title: "Contact us now",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
   },
];

export const Home: React.FC<HomeProps> = ({}) => {
   const classes = HomeStyles();

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
               <Button className="home_btn">Get appointment</Button>
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
            {card.map((c) => (
               <Grid container item lg={4} md={6} xs={12}>
                  <Cards title={c.title} text={c.text} icon={c.icon} />
               </Grid>
            ))}
         </Grid>
      </div>
   );
};
