import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';
import LoginForm from '../components/login';
import SignUpForm from '../components/signup';
import { RELOAD_USER_REQUEST } from '../reducers/user';
import { mainPage } from '../css/mainPage';
import wrapper from '../store/configureStore';

const mainIndex = () => {
  const [showLog, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [back, setBack] = useState(true);
  const { me, logInDone, loadUserDone } = useSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (logInDone && loadUserDone) {
      router.push('/board');
      document.getElementById('goBack-btn').style.display = 'none';
    }
  }, [logInDone, loadUserDone]);

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
            <p>Hi {me.userNickName},</p>
            <p>Wait a sec we move to your board</p>
          </>
          )}
          {!me && back ? (
            <>
              <Button type="button" onClick={showLogin}>로그인</Button>
              <Button type="button" onClick={showSignUp}>회원가입</Button>
            </>
          )
            : (
              <Button id="goBack-btn" className="go-back-set" type="button" onClick={goBackToForm}>뒤로가기</Button>
            )}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  console.log(cookie, 'this is cookie');
  context.store.dispatch({
    type: RELOAD_USER_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default mainIndex;
