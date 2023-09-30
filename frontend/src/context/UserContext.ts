import { User } from "@/types/user";
import { createContext } from "react";

type UserContextValueType = {
  user?: User;
  setUser: (u: User) => void;
};

export const UserContext = createContext<UserContextValueType | null>(null);
