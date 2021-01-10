import { Grid } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import Image from "next/image";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
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
                  width={720}
                  height={390}
                  layout="intrinsic"
               />
            </Grid>
         </Grid>
      </div>
   );
};
