import { LOADING_START, LOADING_END } from "../types";

type Action = {
   type: string;
   payload: any;
};

type State = {
   loading: boolean;
   user: any[];
};

export const initialUserState: State = {
   loading: false,
   user: [],
};

export const userReducer = (state: State, action: Action) => {
   switch (action.type) {
      case LOADING_START:
         return { ...state, loading: true };
      case "LOADING_END":
         return { ...state, loading: false };
      default:
         return state;
   }
};
