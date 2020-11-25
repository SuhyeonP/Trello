import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
import useInput from '../exp/useInput';

const LoginForm = () => {
  const [userId, onChangeId] = useInput('');
  const [userPassword, onChangePw] = useInput('');

  const gotoLogin = useCallback(() => {
    console.log(userId, userPassword);
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
