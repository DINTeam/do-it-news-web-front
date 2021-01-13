import fetch from '../../helpers/fakeFetch';

const postSignInSuccessResponseData = {
  success: true,
  signIn: true,
};

const postSignInFailResponseData = {
  success: true,
  signIn: false,
};

export const postSignIn = aUser => {
  let res = postSignInFailResponseData;

  if (aUser.userId === 'admin' && aUser.userPw === '1234') {
    res = postSignInSuccessResponseData;
  }

  return fetch.post(
    `fakeFetch.com/signin`,
    { userId: aUser.userId, userPw: aUser.userPw },
    res,
  );
};

const postSignOutSuccessResponseData = {
  success: true,
  signOut: true,
};

export const postSignOut = aUser => {
  return fetch.post(
    `fakeFetch.com/signout`,
    { userId: aUser.userId },
    postSignOutSuccessResponseData,
  );
};
