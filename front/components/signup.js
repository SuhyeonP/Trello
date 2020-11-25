import React, { useCallback, useState } from 'react';
import { Form, Input } from 'antd';
import useInput from '../exp/useInput';

const SignUpForm = () => {
  const [userId, onChangeId] = useInput('');
  const [userPassword, onChangePassword] = useInput('');
  const [userNick, onChangeNick] = useInput('');
  const [pwCheck, setPwCheck] = useState('');
  const [pwError, setPwError] = useState(false);

  const onChangePwCheck = useCallback((e) => {
    setPwError(e.target.value !== userPassword);
    setPwCheck(e.target.value);
  }, [userPassword]);

  const gotoSignUp = useCallback(() => {
    if (userPassword !== pwCheck) {
      return setPwError(true);
    }
    return console.log(userId, userPassword);
  }, [userId, userPassword, userNick, pwCheck]);

  return (
    <>
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
        <button type="submit">SignUp</button>
      </Form>
    </>
  );
};

export default SignUpForm;
