import { Grid, Typography } from "@material-ui/core";

interface AboutCardsProps {
   title: string;
   text: string;
   icon: any;
}

export const AboutCards: React.FC<AboutCardsProps> = ({
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
