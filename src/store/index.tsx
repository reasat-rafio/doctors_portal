import { useContext, createContext, useReducer } from "react";
import { initialProfile, profileReducer } from "./reducer";

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
   const [state, dispatch] = useReducer<ProfileReducer>(
      profileReducer,
      initialProfile
   );

   return (
      <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
   );
};

export const useCtx = () => useContext(Store);
