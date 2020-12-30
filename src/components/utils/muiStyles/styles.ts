import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const aboutStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   content: {
      padding: 20,
   },
   img: {
      margin: "auto",
   },
   info: {
      transform: "translateY(50px)",
      [theme.breakpoints.up("md")]: {
         width: "70%",
      },

      margin: "auto",
   },
   context: {
      [theme.breakpoints.down("md")]: {
         justifyContent: "center",
         alignItems: "center",
      },
   },
}));
