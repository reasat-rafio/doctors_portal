import { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useCtx } from "../../store";
import { removeSnackbar } from "../../store/actions/snackbar";

function Alert(props: any) {
   return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
      "& > * + *": {
         marginTop: theme.spacing(2),
      },
   },
}));

export default function Snackbars() {
   const { snackbarState, snackbarDispatch } = useCtx();

   const classes = useStyles();
   const [open, setOpen] = useState(false);

   const { snackbarOpen, snackbarType, snackbarMessage } = snackbarState;

   useEffect(() => {
      setOpen(snackbarOpen);
   }, [snackbarState]);

   const handleClose = (event: any, reason: any) => {
      if (reason === "clickaway") {
         return;
      }

      snackbarDispatch(removeSnackbar());
   };

   return (
      <div className={classes.root}>
         <Snackbar
            anchorOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
         >
            <Alert onClose={handleClose} severity={snackbarType}>
               {snackbarMessage}
            </Alert>
         </Snackbar>
      </div>
   );
}
