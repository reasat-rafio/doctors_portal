import { LOADING_END, LOADING_START, USER_LOGIN, USER_LOGOUT } from "../types";

export const USER_LOGIN_ACTION = (payload: any) => {
   return {
      type: USER_LOGIN,
      payload,
   };
};

export const USER_LOGOUT_ACTION = () => {
   return {
      type: USER_LOGOUT,
   };
};

export const LOADING_START_ACTION = () => {
   return { type: LOADING_START };
};

export const LOADING_END_ACTION = () => {
   return { type: LOADING_END };
};
