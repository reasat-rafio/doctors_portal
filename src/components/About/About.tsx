import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { HomeStyles } from "../../utils/styles";
import { AboutCards } from "./AboutCards";

interface AboutProps {}

const card = [
   {
      icon: (
         <Image
            src="/001-dental.png"
            alt="picture"
            layout="intrinsic"
            width={50}
            height={50}
         />
      ),
      title: "Whats our location",
      text:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
   },
   {
      icon: (
         <Image
            src="/tooth.png"
            alt="picture"
            width={50}
            layout="intrinsic"
            height={50}
         />
      ),
      title: "Opening Hours",
      text:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
   },
   {
      icon: (
         <Image
            src="/tooth (1).png"
            alt="picture"
            width={50}
            layout="intrinsic"
            height={50}
         />
      ),
      title: "Contact us now",
      text:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
   },
];

export const About: React.FC<AboutProps> = ({}) => {
   const classes = HomeStyles();

   return (
      <div className="about">
         <div className="about_header">
            <Typography
               className="about_title"
               variant="subtitle2"
               gutterBottom
            >
               OUR SERVICES
            </Typography>
            <Typography className="about_subtitle" variant="h4">
               Services We Provide
            </Typography>
         </div>

         <Grid
            container
            spacing={5}
            justify="center"
            alignItems="center"
            style={{ marginTop: "30px" }}
            className={classes.cardWitdh}
         >
            {card.map((c, i) => (
               <Grid key={i} container item md={4} xs={12}>
                  <AboutCards title={c.title} text={c.text} icon={c.icon} />
               </Grid>
            ))}
         </Grid>
      </div>
   );
};
