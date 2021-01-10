import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

interface CardsProps {
   title: string;
   text: string;
   icon: any;
}

export const Cards: React.FC<CardsProps> = ({ title, text, icon }) => {
   return (
      <Grid
         container
         className={
            title === "Opening Hours" ? "middle_card" : "notMiddle_card"
         }
      >
         <Grid item xs={3} style={{ margin: "auto" }}>
            {icon}
         </Grid>
         <Grid item xs={9}>
            <Typography variant="subtitle2">{title}</Typography>
            <Typography variant="caption">{text}</Typography>
         </Grid>
      </Grid>
   );
};
