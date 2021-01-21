import { Typography } from "@material-ui/core";
import moment from "moment";

interface AvailbleAppointmentsProps {
   date: {};
}

export const AvailbleAppointments: React.FC<AvailbleAppointmentsProps> = ({
   date,
}) => {
   return (
      <div className="availbleAppointments">
         <div>
            <Typography className="title">
               Available Appointments on {moment(date).format("MMMM Do YYYY")}
            </Typography>
         </div>
         <div className="cards"></div>
      </div>
   );
};
