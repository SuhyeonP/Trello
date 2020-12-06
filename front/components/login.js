import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
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
        <div className="signup-div">
          <Input required placeholder="ID" value={userId} onChange={onChangeId} />
        </div>
        <div className="signup-div">
          <Input required placeholder="PW" value={userPassword} onChange={onChangePw} />
        </div>
        <Button htmlType="submit">Login</Button>
      </Form>
    </>
  );
};

export default LoginForm;
