import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { HomeStyles } from "../../utils/styles";
import { ServicesWePvdCards } from "./ServicesWePvdCards";
import { SvcWePvdDetails } from "./SvcWePvdDetails";

interface ServicesWeProvideProps {}

const card = [
   {
      icon: (
         <Image
            src="/001-dental.png"
            alt="picture"
            layout="fixed"
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
            layout="fixed"
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
            layout="fixed"
            height={50}
         />
      ),
      title: "Contact us now",
      text:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
   },
];

export const ServicesWeProvide: React.FC<ServicesWeProvideProps> = ({}) => {
   const classes = HomeStyles();

   return (
      <div className="About">
         <div className="About_header">
            <Typography
               className="About_title"
               variant="subtitle2"
               gutterBottom
            >
               OUR SERVICES
            </Typography>
            <Typography className="About_subtitle" variant="h4">
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
                  <ServicesWePvdCards
                     title={c.title}
                     text={c.text}
                     icon={c.icon}
                  />
               </Grid>
            ))}
         </Grid>

         <SvcWePvdDetails />
      </div>
   );
};
