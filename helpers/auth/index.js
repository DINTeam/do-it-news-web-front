import * as authApi from '../../api/auth';
import * as localStorage from '../localStorage';
import * as sessionStorage from '../sessionStorage';
import User from '../../objects/User';

let stateSignIn = false;
let tempUser = new User();

const initState = () => {
  stateSignIn = false;
  tempUser = new User();
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

export const keepSignIn = () => {
  const user = sessionStorage.getItem('user');
  const jwt = sessionStorage.getItem('jwt');

  if (!(user && jwt)) return false;

  localStorage.setItem('user', user);
  localStorage.setItem('jwt', jwt);

  return true;
};

export const signOut = async () => {
  const response = await authApi.postSignIn(tempUser);

  if (response.signOut) initState();

  return !stateSignIn;
};

export const getStateSignIn = () => stateSignIn;
