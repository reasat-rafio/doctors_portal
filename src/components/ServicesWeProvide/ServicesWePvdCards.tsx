import { Grid, Typography } from "@material-ui/core";

interface ServicesWePvdCardsProps {
   title: string;
   text: string;
   icon: any;
}

export const ServicesWePvdCards: React.FC<ServicesWePvdCardsProps> = ({
   title,
   text,
   icon,
}) => {
   return (
      <Grid container direction="column">
         <Grid className="abtCdIcon" item>
            {icon}
         </Grid>
         <Grid item>
            <Typography className="abtCdTitle" variant="subtitle2">
               {title}
            </Typography>
            <Typography className="text abtCdText" variant="subtitle2">
               {text}
            </Typography>
         </Grid>
      </Grid>
   );
};
