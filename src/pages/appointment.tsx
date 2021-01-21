import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Grid, Typography } from "@material-ui/core";
import Image from "next/image";

interface appointmentProps {}
const Appointment: React.FC<appointmentProps> = ({}) => {
   const [dateState, setDateState] = useState(new Date());

   //Change Date Method
   const changeDate = (e: any) => {
      setDateState(e);
   };

   return (
      <Grid container className="appointment">
         <Grid item md={5} xs={12}>
            <div className="ap_dtls">
               <Typography className="title">Appointment</Typography>

               <Calendar
                  value={dateState}
                  onChange={changeDate}
                  className="react-calendar"
               />
               <p>
                  Current selected date is
                  <b>{moment(dateState).format("MMMM Do YYYY")}</b>
               </p>
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
   );
};

export default Appointment;
