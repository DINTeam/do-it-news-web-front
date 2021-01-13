import * as authApi from '../../api/auth';

import User from '../../objects/User';

let stateSignIn = false;
let user = new User();

const initState = () => {
  stateSignIn = false;
  user = new User();
};

const setState = aUser => {
  stateSignIn = true;
  user = aUser;
};

export const signIn = async (intputUserId, inputUserPw) => {
  // 암호화 필요
  const cryptoPw = inputUserPw;
  const inputUser = new User({ userId: intputUserId, userPw: cryptoPw });
  const response = await authApi.postSignIn(inputUser);

  if (response.signIn) setState();

  return stateSignIn;
};

export const signOut = async () => {
  const response = await authApi.postSignIn(user);

  if (response.signOut) initState();

  return !stateSignIn;
};

export const getStateSignIn = () => stateSignIn;
