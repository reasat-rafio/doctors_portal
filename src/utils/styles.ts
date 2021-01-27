import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const SmNavMenuStyles = makeStyles({
   list: {
      width: 250,
   },
   fullList: {
      width: "auto",
   },
});

export const HomeStyles = makeStyles((theme: Theme) =>
   createStyles({
      cardWitdh: {
         width: "80vw",
         [theme.breakpoints.down("sm")]: {
            width: "100%",
         },
         margin: "auto",
      },
   })
);

export const AppointmentStyles = makeStyles((theme: Theme) => {
   createStyles({
      picWidth: {
         maxWidth: "500px",
      },
   });
});

export const loginCardStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         minWidth: 275,
      },
      bullet: {
         display: "inline-block",
         margin: "0 2px",
         transform: "scale(0.8)",
      },
      title: {
         marginTop: 10,
         marginBottom: 10,
         fontSize: 16,
         textAlign: "center",
      },
      loginContaienr: {
         marginTop: "auto",
         [theme.breakpoints.down("sm")]: {
            margin: "auto",
         },
      },
   })
);

export const dashboardNavStyles = makeStyles((theme: Theme) =>
   createStyles({
      li: {
         [theme.breakpoints.down("sm")]: {
            display: "none",
         },
      },
   })
);
