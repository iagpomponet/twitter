import { ReactNode, createContext, useContext, useState } from "react";
import { UserI } from "../services/user/types";

const UserContext = createContext(
  {} as {
    user: UserI;
    setUser: React.Dispatch<React.SetStateAction<UserI>>;
  }
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserI>({} as UserI);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => useContext(UserContext);
