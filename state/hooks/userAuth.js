import { useContext } from 'react';
import {
  signIn as signInService,
  signUp as signUpService,
  signOut as signOutService,
} from '../services/user-service.js';
import { showError } from '../services/toaster.js';
import {
  UserStateContext,
  UserActionContext,
} from '../context/UserContext.jsx';

export function useStatus() {
  const { user } = useContext(UserStateContext);
  return { user };
}

export function useAuth() {
  const { setUser } = useContext(UserActionContext);

  const createAction = (service) => async (creds) => {
    const { user, error } = await service(creds);

    if (error) {
      showError(error.message);
    }
    if (user) {
      setUser(user);
    }
  };

  const signIn = createAction(signInService);
  const signUp = createAction(signUpService);
  const signOut = createAction(signOutService);

  return {
    signIn,
    signUp,
    signOut,
  };
}
