import { UserContext } from "@/context/UserContext";
import { PageContext } from "@/context/PageContext";
import { User } from "@/types/user";
import { PageType } from "@/types/pageType";

type ContextProviderProps = {
  children: React.ReactNode;
  user?: User;
  setUser: (u: User) => void;
  pageType: PageType;
  setPageType: (pt: PageType) => void;
};

export default function ContextProvider({
  children,
  user,
  setUser,
  pageType,
  setPageType,
}: ContextProviderProps) {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <PageContext.Provider value={{ pageType, setPageType }}>
        {children}
      </PageContext.Provider>
    </UserContext.Provider>
  );
}
