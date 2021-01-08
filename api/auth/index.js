import fetch from '../../helpers/fakeFetch';

const postSignInSuccessResponseData = {
  success: true,
  signIn: true,
};

const postSignInFailResponseData = {
  success: true,
  signIn: false,
};

export const postSignIn = (userId, userPw) => {
  if (userId === 'admin' && userPw === '1234') {
    return fetch.post(
      `fakeFetch.com/signin`,
      { userId, userPw },
      postSignInSuccessResponseData,
    );
  }

  return fetch.post(
    `fakeFetch.com/signin`,
    { userId, userPw },
    postSignInFailResponseData,
  );
};

const postSignOutSuccessResponseData = {
  success: true,
  signOut: true,
};

export const postSignOut = () => {
  return fetch.post(`fakeFetch.com/signout`, postSignOutSuccessResponseData);
};
