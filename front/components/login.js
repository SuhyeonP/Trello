import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import useInput from '../exp/useInput';
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = () => {
  const [userId, onChangeId] = useInput('');
  const [userPassword, onChangePw] = useInput('');
  const dispatch = useDispatch();

  const gotoLogin = useCallback(() => {
    console.log(userId, userPassword);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { userId, userPassword },
    });
  }, [userId, userPassword]);

  return (
    <>
      <Form onFinish={gotoLogin}>
        <div>
          <label htmlFor="userId">ID&nbsp;:&nbsp;</label>
          <Input value={userId} onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="userPassword">PW&nbsp;:&nbsp;</label>
          <Input value={userPassword} onChange={onChangePw} />
        </div>
        <button type="submit">Login</button>
      </Form>
    </>
  );
};

export default LoginForm;
