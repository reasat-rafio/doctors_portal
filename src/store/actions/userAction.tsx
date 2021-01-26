import { USER_LOGIN, USER_LOGOUT } from "../types";

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
