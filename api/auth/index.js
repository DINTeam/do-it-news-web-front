import fetch from '../../helpers/fakeFetch';

// jwt.header = {
//   alg: 'HS256',
//   typ: 'JWT',
// };
// jwt.payload = {
//   id: 'doitnews123',
//   iat: 1516239022,
//   exp: 1616239022,
// };
// jwt.signature = HMACSHA256(
//   base64UrlEncode(header) + "." +
//   base64UrlEncode(payload),
// )

const postSignInSuccessResponseData = {
  success: true,
  signIn: true,
  jwt:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRvaXRuZXdzMTIzIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2MTYyMzkwMjJ9.CwkNPjTm476cRn8QAcZdKI63dbrSmL2_glnzBsxJpu0',
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
