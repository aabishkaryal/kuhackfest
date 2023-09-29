import { Dispatch, SetStateAction } from "react";

import { AuthContext } from "@/context/AuthContext";

type ContextProviderProps = {
  children: React.ReactNode;
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export default function ContextProvider({
  children,
  authenticated,
  setAuthenticated,
}: ContextProviderProps) {
  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
