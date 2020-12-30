import Image from "next/image";
import { Button, Grid, Typography } from "@material-ui/core";
import { aboutStyles } from "../../utils/muiStyles/styles";
import { AboutInfo } from "./about_info/AboutInfo";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
   const classes = aboutStyles();

   return (
      <Grid
         container
         justify="center"
         alignContent="center"
         className={classes.root}
      >
         <Grid
            className={classes.content}
            item
            container
            md={5}
            xs={12}
            spacing={3}
         >
            <Grid item>
               <Typography className="title" variant="h3" component="h2">
                  Your New Smile Stars Here
               </Typography>
            </Grid>
            <Grid item>
               <Typography className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  facere eius laborum similique expedita ut sunt consequuntur
                  iure dicta ipsam!
               </Typography>
            </Grid>
            <Grid item>
               <Button className="linar_btn">GET APPOINMENT</Button>
            </Grid>
         </Grid>
         <Grid
            item
            container
            md={7}
            xs={12}
            justify="center"
            alignItems="center"
         >
            <Image
               className={classes.img}
               src="/img1.jpg"
               layout="intrinsic"
               width={700}
               height={370}
               alt="Starbucks Logo"
            />
         </Grid>
         <AboutInfo />
      </Grid>
   );
};
