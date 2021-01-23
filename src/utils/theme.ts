import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
   palette: {
      primary: indigo,
      secondary: {
         main: "#00c6bf",
      },
   },
});

export default theme;
