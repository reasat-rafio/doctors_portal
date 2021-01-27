import { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import moment from "moment";
import { appointmentsCard } from "../RegisterCard/Data";
import { AvailableCardsDialog } from "./AvailableCardsDialog";

interface AvailbleAppointmentsProps {
   date: {};
}

export const AvailbleAppointments: React.FC<AvailbleAppointmentsProps> = ({
   date,
}) => {
   const [openModal, setOpenModal] = useState<boolean>(false);
   const [modalText, setModalText] = useState<string>("");
   const handleClickOpen = (title: string) => {
      setModalText(title);
      setOpenModal(true);
   };
   const handleClose = () => {
      setOpenModal(false);
   };

   return (
      <div className="availbleAppointments">
         <div>
            <Typography className="title">
               Available Appointments on {moment(date).format("MMMM Do YYYY")}
            </Typography>
         </div>
         <div className="cards">
            <Grid container spacing={4}>
               {appointmentsCard.map(({ title, time, text }, i) => (
                  <Grid key={i} item xs={12} md={4}>
                     <div className="availbleAppointmentsCard">
                        <h2>{title}</h2>
                        <p>{time}</p>
                        <p>{text}</p>
                        <Button
                           className="avlBtn"
                           onClick={() => handleClickOpen(title)}
                        >
                           Book Appoinments
                        </Button>
                     </div>
                  </Grid>
               ))}
            </Grid>
         </div>
         <AvailableCardsDialog
            openModal={openModal}
            handleClose={handleClose}
            title={modalText}
            date={date}
         />
      </div>
   );
};
