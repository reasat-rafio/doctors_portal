import { USER_LOGIN } from "../types";

export const USER_LOGIN_ACTION = (payload: any) => {
   return {
      type: USER_LOGIN,
      payload,
   };
};
