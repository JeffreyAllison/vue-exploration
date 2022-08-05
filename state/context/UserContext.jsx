import { createContext, useMemo, useState } from 'react';
import { getUser } from '../services/user-service.js';

export const UserStateContext = createContext();
export const UserActionContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());

  const stateValue = {
    user,
  };

  const actionValue = useMemo(
    () => ({
      setUser,
    }),
    [setUser]
  );

  return (
    <UserStateContext.Provider value={stateValue}>
      <UserActionContext.Provider value={actionValue}>
        {children}
      </UserActionContext.Provider>
    </UserStateContext.Provider>
  );
}
