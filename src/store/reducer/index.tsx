import combineReducers from "react-combine-reducers";
import { initialSnackbarState, snackbarReducer } from "./snackbarReducer";
import { initialUserState, userReducer } from "./userReducer";

const [profileReducer, initialProfile] = combineReducers<any>({
   snackbar: [snackbarReducer, initialSnackbarState],
   user: [userReducer, initialUserState],
});

export { profileReducer, initialProfile };
