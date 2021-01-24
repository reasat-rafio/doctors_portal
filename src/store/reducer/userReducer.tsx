type Action = {
   type: string;
   payload: any;
};

type Location = {
   country: string;
   city: string;
};

export const initialUserState: Location = {
   country: "UK",
   city: "London",
};

export const userReducer = (state: Location, action: Action) => {
   switch (action.type) {
      case "ACTION_B":
         return { ...state, city: "Manchester" };
      default:
         return state;
   }
};
