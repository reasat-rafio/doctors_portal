import { useContext, createContext, useReducer, useEffect } from "react";
import {
   initialSnackbarState,
   snackbarReducer,
} from "./reducer/snackbarReducer";
import { initialUserState, userReducer } from "./reducer/userReducer";

const Store = createContext<any>(null);

interface StoreProps {
   children: React.ReactNode;
}

type Action = {
   type: string;
   payload: any;
};

type ProfileReducer = (state: any, action: Action) => any;

export const GlobalState: React.FC<StoreProps> = ({ children }) => {
   const [userState, userDispatch] = useReducer(
      userReducer,
      initialUserState,
      () => {
         if (typeof window !== "undefined") {
            const localData = localStorage.getItem("userState");
            return localData ? JSON.parse(localData) : initialUserState;
         }
         return initialUserState;
      }
   );

   const [snackbarState, snackbarDispatch] = useReducer<ProfileReducer>(
      snackbarReducer,
      initialSnackbarState
   );

   useEffect(() => {
      localStorage.setItem("userState", JSON.stringify(userState));
   }, [userState]);

   return (
      <Store.Provider
         value={{ userState, userDispatch, snackbarState, snackbarDispatch }}
      >
         {children}
      </Store.Provider>
   );
};

export const useCtx = () => useContext(Store);
