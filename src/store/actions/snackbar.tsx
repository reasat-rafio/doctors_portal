import { CLEAR_SNACKBAR, SET_SNACKBAR } from "../types";

export const setSnackbar = (
   snackbarOpen: boolean,
   snackbarType: string,
   snackbarMessage: string
) => {
   return {
      type: SET_SNACKBAR,
      payload: {
         snackbarOpen,
         snackbarType,
         snackbarMessage,
      },
   };
};

export const removeSnackbar = () => {
   return {
      type: CLEAR_SNACKBAR,
   };
};
