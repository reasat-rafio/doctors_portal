import { CLEAR_SNACKBAR, SET_SNACKBAR } from "../types";

type State = {
   snackbarOpen: boolean;
   snackbarType: string;
   snackbarMessage: string;
};

type Action = {
   type: string;
   payload: any;
};

export const initialSnackbarState = {
   snackbarOpen: false,
   snackbarType: "",
   snackbarMessage: "",
};

export const snackbarReducer = (state: State, action: Action) => {
   switch (action.type) {
      case SET_SNACKBAR:
         const { snackbarOpen, snackbarType, snackbarMessage } = action.payload;
         return {
            ...state,
            snackbarOpen,
            snackbarType,
            snackbarMessage,
         };
      case CLEAR_SNACKBAR:
         return {
            ...state,
            snackbarOpen: false,
            snackbarType: "",
            snackbarMessage: "",
         };
      default:
         return state;
   }
};
