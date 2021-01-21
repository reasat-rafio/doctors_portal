import { Button, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { AppointmentStyles } from "../../utils/styles";

interface AppointmentProps {}

export const Appointment: React.FC<AppointmentProps> = ({}) => {
   const classes = AppointmentStyles();

   return (
      <div className="appointment">
         <div className="innerAppointment">
            <Grid container>
               <Grid item md={4} xs={false}>
                  <div className="imgContainer">
                     <Image
                        src="/doctor.png"
                        width={1}
                        height={1}
                        layout="responsive"
                     />
                  </div>
               </Grid>
               <Grid item md={8} xs={12} className="description">
                  <Typography
                     className="ap_title"
                     variant="subtitle2"
                     gutterBottom
                  >
                     APPOINMENT
                  </Typography>
                  <Typography className="title" gutterBottom>
                     Make an appointment Today
                  </Typography>
                  <Typography className="text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum esse illo veniam repudiandae, repellendus quod
                     incidunt eligendi eos laborum, iusto perspiciatis deserunt
                     suscipit, cum fugit. Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Nihil a aliquid voluptates
                  </Typography>
                  <Button className="home_btn svgWepvdBtn">Learn More</Button>
               </Grid>
            </Grid>
         </div>
      </div>
   );
};
