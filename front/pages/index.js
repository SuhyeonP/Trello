import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import LoginForm from '../components/login';
import SignUpForm from '../components/signup';

const mainIndex = () => {
  const [userIn, setUserIn] = useState(false);
  // userIn 리덕스로 사용자 있는지 없는지로 만든거 임의구현
  const [showLog, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);

  const logOutBtn = useCallback(() => {
    setUserIn(false);
  }, []);

  const showLogin = useCallback(() => {
    setShowLogin(true);
    setShowSign(false);
  }, []);
  const showSignUp = useCallback(() => {
    setShowSign(true);
    setShowLogin(false);
  }, []);
  const lookLike = useCallback(() => {
    setUserIn(true);
    setShowLogin(false);
    setShowSign(false);
  }, [userIn]);
  return (
    <>
      <Head>
        <title>hi test</title>
      </Head>
      <div>Hello, Next!</div>
      <button type="button" onClick={lookLike}>로그인한것처럼 보이게 하기</button>
      <br />
      {showLog && <LoginForm />}
      {showSign && <SignUpForm />}
      {userIn ? (
        <button type="button" onClick={logOutBtn}>로그아웃</button>
      )
        : (
          <>
            <button type="button" onClick={showLogin}>로그인</button>
            <button type="button" onClick={showSignUp}>회원가입</button>
          </>
        )}
    </>
  );
};

export default mainIndex;
