import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../components/login';
import SignUpForm from '../components/signup';
import { LOG_OUT_REQUEST } from '../reducers/user';

const mainIndex = () => {
  const [showLog, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [back, setBack] = useState(true);
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logOutBtn = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  const showLogin = useCallback(() => {
    setShowLogin(true);
    setShowSign(false);
    setBack(false);
  }, []);
  const showSignUp = useCallback(() => {
    setShowSign(true);
    setBack(false);
    setShowLogin(false);
  }, []);
  const goBackToForm = useCallback(() => {
    setBack(true);
    setShowSign(false);
    setShowLogin(false);
  }, []);

  return (
    <>
      <Head>
        <title>hi test</title>
      </Head>
      <div>Hello, Next!</div>
      <br />
      {!me && showLog && <LoginForm />}
      {!me && showSign && <SignUpForm />}
      {me
      && (
      <>
        <p>Hi {me.nickName},</p>
        <button type="button" onClick={logOutBtn}>로그아웃</button>
      </>
      )}
      {!me && back ? (
        <>
          <button type="button" onClick={showLogin}>로그인</button>
          <button type="button" onClick={showSignUp}>회원가입</button>
        </>
      )
        : (
          <button type="button" onClick={goBackToForm}>뒤로가기</button>
        )}
    </>
  );
};

export default mainIndex;
