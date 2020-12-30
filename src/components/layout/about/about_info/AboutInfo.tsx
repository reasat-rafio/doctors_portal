import { Grid } from "@material-ui/core";
import { aboutStyles } from "../../../utils/muiStyles/styles";
import { AboutCard } from "./AboutCard";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";

interface AboutInfoProps {}

const context1 = {
   title: "Opening Hours",
   text: "Lorem ipsum dolor sit amet, consectetur adipisicing ",
};

const context2 = {
   title: "Visit Our Location",
   text: "Lorem ipsum dolor sit amet, consectetur adipisicing ",
};
const context3 = {
   title: "Contact Us Now",
   text: "Lorem ipsum dolor sit amet, consectetur adipisicing ",
};

export const AboutInfo: React.FC<AboutInfoProps> = ({}) => {
   const classes = aboutStyles();
   return (
      <Grid
         className={classes.info}
         container
         justify="center"
         alignContent="center"
         spacing={5}
      >
         <Grid container item lg={4} md={6} xs={12}>
            <AboutCard
               className="about_info_card1"
               icon={
                  <AccessTimeIcon style={{ color: "white", fontSize: 45 }} />
               }
               context={context1}
            />
         </Grid>
         <Grid container item lg={4} md={6} xs={12}>
            <AboutCard
               className="about_info_card2"
               icon={
                  <LocationOnIcon style={{ color: "white", fontSize: 45 }} />
               }
               context={context2}
            />
         </Grid>
         <Grid container item lg={4} md={6} xs={12}>
            <AboutCard
               className="about_info_card3"
               icon={
                  <PhoneInTalkOutlinedIcon
                     style={{ color: "white", fontSize: 45 }}
                  />
               }
               context={context3}
            />
         </Grid>
      </Grid>
   );
};
