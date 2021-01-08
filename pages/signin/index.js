import { useState } from 'react';
import Router from 'next/router';

import * as auth from '../../helpers/auth';

const SignInTest = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleUserId = event => setUserId(event.target.value);
  const handleUserPw = event => setUserPw(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await auth.signIn(userId, userPw);

    if (response) {
      Router.push('/authtestpage');
    } else {
      setFeedbackMsg('Wrong ID or PW');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>SignIn</h1>
        <input type="text" value={userId} onChange={handleUserId} />
        <input type="text" value={userPw} onChange={handleUserPw} />
        <input type="submit" value="SignIn" />
      </form>
      {feedbackMsg}
    </>
  );
};

SignInTest.propTypes = {};

export default SignInTest;
