type Identity = {
   name: string;
};

type Action = {
   type: string;
   payload: any;
};

export const initialSnackbarState: Identity = {
   name: "Harry",
};

export const snackbarReducer = (state: Identity, action: Action) => {
   switch (action.type) {
      case "ACTION_A":
         return { ...state, name: "Puli" };
      default:
         return state;
   }
};
