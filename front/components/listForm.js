import React, { useCallback, useState } from 'react';
import { Form } from 'antd';
import useInput from '../exp/useInput';
import { makeBoard } from '../css/mainboard';
import AddOrClose from './addorclose';

const ListForm = () => {
  const [listTitle, setListTitle] = useInput('');
  const [inputMode, setInputMode] = useState(false);
  const [togOn, setToggle] = useState(true);

  const makingBoard = useCallback(() => {
    if (togOn) {
      setInputMode(true);
      setToggle(false);
      document.getElementById('erase-input').style.display = 'none';
    } else {
      setInputMode(false);
      setToggle(true);
      document.getElementById('erase-input').style.display = 'block';
      console.log(listTitle);
    }
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
            <input value={listTitle} onChange={setListTitle} />
            <AddOrClose addText="Add List" onClickToClose={openInputTitle} />
          </div>
        </Form>
        )}
      </div>
    </div>
  );
};
export default ListForm;
