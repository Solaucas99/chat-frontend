import React, { useState, createContext, useMemo, useContext } from 'react';
import { IUserContextProvider } from '../Types/IUserContextProvider';

const DEFAULT_USER = {
  userData: {
    friendships: null,
    conversations: [],
    username: '',
  },
  userId: '',
  userSignUpDate: '',
  userSocketId: '',
};

type UserContextType = {
  user: IUserContextProvider;
  setUser: React.Dispatch<React.SetStateAction<IUserContextProvider>>;
};

const UserContext = createContext<UserContextType | null>(null);

export function useUser() {
  return useContext(UserContext) as UserContextType;
}

function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUserContextProvider>(DEFAULT_USER);

  const obj = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return <UserContext.Provider value={obj}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
