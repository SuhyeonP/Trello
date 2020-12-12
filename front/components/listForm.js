import React, { memo, useCallback, useState } from 'react';
import { Form } from 'antd';
import { useRouter } from 'next/router';
import useInput from '../exp/useInput';
import { makeBoard } from '../css/mainboard';
import AddOrClose from './addorclose';

const ListForm = () => {
  const [listTitle, setListTitle] = useInput('');
  const [inputMode, setInputMode] = useState(false);
  const [togOn, setToggle] = useState(true);
  const [focusOnForm, setFocusOnForm] = useState(true);
  const router = useRouter();

  const makingBoard = useCallback(() => {
    setInputMode(false);
    setToggle(true);
    setFocusOnForm(true);
    document.getElementById('erase-input').style.display = 'block';
    console.log(listTitle);
    router.push('/board');
  }, [listTitle, inputMode, togOn]);

  const openInputTitle = useCallback(() => {
    if (togOn) {
      setInputMode(true);
      setToggle(false);
      document.getElementById('erase-input').style.display = 'none';
    } else {
      setInputMode(false);
      setToggle(true);
      document.getElementById('erase-input').style.display = 'block';
    }
  }, [inputMode, togOn]);

  return (
    <div css={makeBoard}>
      <div className="making-board">
        <span id="erase-input" onClick={openInputTitle} className="placeholder"><span className="icon-sm icon-add" />Add another list</span>
        {inputMode && (
        <Form onFinish={makingBoard}>
          <div className="title-inputmode">
            <input autoFocus={focusOnForm} value={listTitle} onChange={setListTitle} />
            <AddOrClose addText="Add List" onClickToClose={openInputTitle} />
          </div>
        </Form>
        )}
      </div>
    </div>
  );
};
export default memo(ListForm);
