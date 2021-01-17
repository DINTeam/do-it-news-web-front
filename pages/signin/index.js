import { useState } from 'react';
import Router from 'next/router';

import Link from '../../components/link';
import Header from '../../components/header';
import Textfield from '../../components/textfield';
import SquareCheckBox from '../../components/squareCheckBox';
import Button from '../../components/button';

import * as auth from '../../helpers/auth';
import useLoading from '../../customHooks/useLoading';

const SignInFooter = () => {
  return (
    <>
      <Link href="/">아이디 찾기</Link>
      <Link href="/">비밀번호 찾기</Link>
      <Link href="/">회원가입</Link>
    </>
  );
};

const SignIn = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [keepSignIn, setKeepSignIn] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const [fetchSignIn, stateLoading] = useLoading(auth.signIn);

  const handleUserId = event => setUserId(event.target.value);
  const handleUserPw = event => setUserPw(event.target.value);
  const handleKeepSignIn = event => setKeepSignIn(event.target.checked);

  const isEmptyInput = inputVal => {
    if (inputVal) return false;
    return true;
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (isEmptyInput(userId) || isEmptyInput(userPw)) {
      setFeedbackMsg('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    const response = await fetchSignIn(userId, userPw);

    if (response) {
      if (keepSignIn) auth.keepSignIn();
      Router.push('/');
    } else {
      setFeedbackMsg('가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.');
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Textfield
              type="text"
              placeholder="이메일 입력"
              value={userId}
              onChange={handleUserId}
            />
          </div>
          <div>
            <Textfield
              type="password"
              placeholder="비밀번호 입력"
              value={userPw}
              onChange={handleUserPw}
            />
          </div>
          <SquareCheckBox
            label="로그인 상태 유지"
            checked={keepSignIn}
            onChange={handleKeepSignIn}
          />
          {feedbackMsg}
          <Button
            type="submit"
            value={stateLoading ? '잠시만 기다려주세요' : '로그인'}
            active={!stateLoading}
          />
        </form>
        <SignInFooter />
      </div>
    </>
  );
};

export default SignIn;
