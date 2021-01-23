import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import { AvailbleAppointments } from "../components/AvailableAppointments/AvailbleAppointments";
import { Layout } from "../components/Layout/Layout";

interface appointmentProps {}
const Appointment: React.FC<appointmentProps> = ({}) => {
   const [dateState, setDateState] = useState(new Date());

   //Change Date Method
   const changeDate = (e: any) => {
      setDateState(e);
   };

   return (
      <Layout>
         <main className="appointment">
            {/* Appointment calender section */}
            <section>
               <Grid container>
                  <Grid item md={5} xs={12}>
                     <div className="ap_dtls">
                        <Typography className="title">Appointment</Typography>

                        <Calendar
                           value={dateState}
                           onChange={changeDate}
                           className="react-calendar"
                        />
                     </div>
                  </Grid>
                  <Grid item md={7} xs={12}>
                     <div className="imgContainer">
                        <Image
                           height={1}
                           width={2}
                           layout="responsive"
                           src="/img1.png"
                        />
                     </div>
                  </Grid>
               </Grid>
            </section>
            {/* Available Appointment section */}
            <section>
               <AvailbleAppointments date={dateState} />
            </section>
         </main>
      </Layout>
   );
};

export default Appointment;
