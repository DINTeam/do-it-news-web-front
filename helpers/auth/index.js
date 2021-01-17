import * as authApi from '../../api/auth';
import * as localStorage from '../localStorage';
import * as sessionStorage from '../sessionStorage';
import User from '../../objects/User';

const getJwt = () => {
  const jwt = sessionStorage.getItem('jwt') || localStorage.getItem('jwt');
  return jwt;
};

export const getUser = () => {
  const stringUser =
    sessionStorage.getItem('user') || localStorage.getItem('user');
  return new User(JSON.parse(stringUser));
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
  const response = await authApi.postSignIn(getUser());

  if (response.signOut) {
    sessionStorage.removeAllItem();
    localStorage.removeAllItem();
  }

  return true;
};

export const getStateSignIn = () => !!getJwt();
