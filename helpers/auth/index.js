import * as authApi from '../../api/auth';

let stateSignIn = false;
let userId = '';

export const signIn = async (intputUserId, inputUserPw) => {
  const response = await authApi.postSignIn(intputUserId, inputUserPw);

  if (response.signIn) {
    stateSignIn = true;
    userId = intputUserId;
  }

  return stateSignIn;
};

export const signOut = async () => {
  const response = await authApi.postSignIn(userId);

  if (response.signOut) {
    stateSignIn = false;
    userId = '';
  }

  return !stateSignIn;
};

export const getStateSignIn = () => stateSignIn;
