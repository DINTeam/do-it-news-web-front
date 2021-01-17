import * as authApi from '../../api/auth';
import * as localStorage from '../localStorage';
import * as sessionStorage from '../sessionStorage';
import User from '../../objects/User';

let stateSignIn = false;
let user = new User();
let jwtString = '';

const initState = () => {
  stateSignIn = false;
  user = new User();
};

export const signIn = async (intputUserId, inputUserPw) => {
  // 암호화 필요
  const cryptoPw = inputUserPw;
  const inputUser = new User({ userId: intputUserId, userPw: cryptoPw });
  const response = await authApi.postSignIn(inputUser);

  if (response.signIn) {
    sessionStorage.setItem('user', JSON.stringify({ userId: intputUserId }));
    sessionStorage.setItem('jwt', response.jwt);
  }

  return response.signIn;
};

export const keepSignIn = () => localStorage.setItem('jwt', jwt);

export const signOut = async () => {
  const response = await authApi.postSignIn(user);

  if (response.signOut) initState();

  return !stateSignIn;
};

export const getStateSignIn = () => stateSignIn;
