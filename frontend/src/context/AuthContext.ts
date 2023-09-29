import { Dispatch, SetStateAction, createContext } from "react";

type AuthContentValueType = {
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContentValueType | null>(null);
