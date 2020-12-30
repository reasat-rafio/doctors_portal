import { Grid, Typography } from "@material-ui/core";
import { aboutStyles } from "../../../utils/muiStyles/styles";

interface AboutCardProps {
   className: string;
   icon: any;
   context: {
      title: string;
      text: string;
   };
}
export const AboutCard: React.FC<AboutCardProps> = ({
   className,
   icon,
   context: { title, text },
}) => {
   const classes = aboutStyles();

   return (
      <Grid
         container
         justify="center"
         alignItems="center"
         className={className}
      >
         <Grid container item className="about_card_icon" md={4} xs={12}>
            {icon}
         </Grid>
         <Grid className={classes.context} container item md={8} xs={12}>
            <Typography
               className="about_card_title"
               variant="overline"
               display="block"
            >
               {title}
            </Typography>

            <Typography
               className="about_card_text"
               variant="caption"
               display="block"
            >
               {text}
            </Typography>
         </Grid>
      </Grid>
   );
};
