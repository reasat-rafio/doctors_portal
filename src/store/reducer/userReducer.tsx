import { useEffect } from "react";
import { LOADING_START, LOADING_END, USER_LOGIN } from "../types";

type Action = {
   type: string;
   payload: any;
};

type State = {
   loading: boolean;
   isLoggedIn: boolean;
   user: any[];
};

export const initialUserState: State = {
   loading: false,
   isLoggedIn: false,
   user: [],
};

export const userReducer = (state: State, action: Action) => {
   console.log(state);
   switch (action.type) {
      case LOADING_START:
         return { ...state, loading: true };
      case LOADING_END:
         return { ...state, loading: false };
      case USER_LOGIN:
         return { ...state, isLoggedIn: true, user: [action.payload] };

      default:
         return state;
   }
};
