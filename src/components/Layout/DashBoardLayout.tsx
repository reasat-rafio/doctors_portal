import { Grid } from "@material-ui/core";
import { DashboardNav } from "../DashboardNav/DashboardNav";

interface DashBoardLayoutProps {
   children: React.ReactChild;
}

export const DashBoardLayout: React.FC<DashBoardLayoutProps> = ({
   children,
}) => {
   return (
      <Grid container>
         <Grid item md={2} xs={2}>
            <DashboardNav />
         </Grid>
         <Grid item md={10} xs={10}>
            {children}
         </Grid>
      </Grid>
   );
};
