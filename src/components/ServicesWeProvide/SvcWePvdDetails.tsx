import { Button, Grid, Typography } from "@material-ui/core";
import Image from "next/image";

interface SvcWePvdDetailsProps {}

export const SvcWePvdDetails: React.FC<SvcWePvdDetailsProps> = ({}) => {
   return (
      <Grid container className="svcDtl" spacing={2}>
         <Grid className="imgContainer" item md={4} xs={12}>
            <Image
               className="img"
               src="/toothremove.png"
               alt="picture"
               height={1}
               width={1}
               layout="responsive"
            />
         </Grid>
         <Grid className="description" item md={8} xs={12}>
            <div>
               <Typography className="title" gutterBottom>
                  Exceptional Dental Care, on Your Terms
               </Typography>
               <Typography className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum esse illo veniam repudiandae, repellendus quod
                  incidunt eligendi eos laborum, iusto perspiciatis deserunt
                  suscipit, cum fugit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nihil a aliquid voluptates inventore? Omnis
                  fuga inventore hic, modi temporibus consectetur? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Explicabo, sed
                  minus. Sunt ipsum tempora mollitia! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nemo nisi consectetur
                  accusantium saepe. Neque esse deserunt commodi atque aliquam
                  possimus.
               </Typography>
               <Button className="home_btn svgWepvdBtn">Learn More</Button>
            </div>
         </Grid>
      </Grid>
   );
};
