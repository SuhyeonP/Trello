import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import LoginForm from '../components/login';
import SignUpForm from '../components/signup';
import { LOG_OUT_REQUEST } from '../reducers/user';
import { mainPage } from '../css/mainPage';

const mainIndex = () => {
  const [showLog, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [back, setBack] = useState(true);
  const { me, logInDone } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (logInDone) {
      router.push('/board');
    }
  }, [logInDone]);

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
      <div css={mainPage}>
        <div className="user-join">
          {!me && showLog && <LoginForm />}
          {!me && showSign && <SignUpForm />}
          {me
          && (
          <>
            <p>Hi {me.nickName},</p>
            <p>Wait a sec we move to your board</p>
            <Button type="button" onClick={logOutBtn}>로그아웃</Button>
          </>
          )}
          {!me && back ? (
            <>
              <Button type="button" onClick={showLogin}>로그인</Button>
              <Button type="button" onClick={showSignUp}>회원가입</Button>
            </>
          )
            : (
              <Button className="go-back-set" type="button" onClick={goBackToForm}>뒤로가기</Button>
            )}
        </div>
      </div>
    </>
  );
};

export default mainIndex;
