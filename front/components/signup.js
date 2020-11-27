import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Router from 'next/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';
import useInput from '../exp/useInput';

const SignUpForm = () => {
  const [userId, onChangeId] = useInput('');
  const [userPassword, onChangePassword] = useInput('');
  const [userNick, onChangeNick] = useInput('');
  const [pwCheck, setPwCheck] = useState('');
  const [pwError, setPwError] = useState(false);
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError } = useSelector((state) => state.user);

  useEffect(() => {
    if (signUpDone) {
      Router.replace('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const onChangePwCheck = useCallback((e) => {
    setPwError(e.target.value !== userPassword);
    setPwCheck(e.target.value);
  }, [userPassword]);

  // eslint-disable-next-line consistent-return
  const gotoSignUp = useCallback(() => {
    if (userPassword !== pwCheck) {
      return setPwError(true);
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { userId, userNick, userPassword },
    });
  }, [userId, userPassword, userNick, pwCheck]);

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Form onFinish={gotoSignUp}>
        <div>
          <label htmlFor="userId">ID&nbsp;:&nbsp;</label>
          <Input value={userId} onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="userNick">NickName&nbsp;:&nbsp;</label>
          <Input value={userNick} onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="userPassword">PW&nbsp;:&nbsp;</label>
          <Input value={userPassword} onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="pwCheck">PW Check&nbsp;:&nbsp;</label>
          <Input name={pwCheck} value={pwCheck} onChange={onChangePwCheck} />
        </div>
        {pwError && <p>비밀번호가 일치하지 않습니다.</p>}
        <Button loading={signUpLoading} type="submit">SignUp</Button>
      </Form>
    </>
  );
};

export default SignUpForm;
