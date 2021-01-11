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
