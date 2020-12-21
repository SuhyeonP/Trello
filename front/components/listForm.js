import React, { memo, useCallback, useState } from 'react';
import { Form } from 'antd';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { makeBoard } from '../css/mainboard';
import AddOrClose from './addorclose';
import useInput from '../exp/useInput';
import { ADD_LIST_REQUEST } from '../reducers/board';

const ListForm = () => {
  const [listTitle, onChangeText, setListTitle] = useInput('');
  const [inputMode, setInputMode] = useState(false);
  const [togOn, setToggle] = useState(true);
  const [focusOnForm, setFocusOnForm] = useState(true);
  const { mainLists } = useSelector((state) => state.board);
  const router = useRouter();
  const dispatch = useDispatch();
  const makingBoard = useCallback(() => {
    setInputMode(false);
    setToggle(true);
    setFocusOnForm(true);
    document.getElementById('erase-input').style.display = 'block';
    console.log(listTitle, mainLists.boardId);
    dispatch({
      type: ADD_LIST_REQUEST,
      data: { listTitle, boardId: mainLists.boardId },
    });
    setListTitle('');
    // router.push('/board');
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
      <div className="same-line">
        <div className="making-board">
          <span id="erase-input" onClick={openInputTitle} className="placeholder"><span className="icon-sm icon-add" />Add another list</span>
          {inputMode && (
              <Form onFinish={makingBoard}>
                <div className="title-inputmode">
                  <input id="list-input-id" autoFocus={focusOnForm} value={listTitle} onChange={onChangeText} />
                  <AddOrClose addText="Add List" onClickToClose={openInputTitle} />
                </div>
              </Form>
          )}
        </div>
      </div>
    </div>
  );
};
export default memo(ListForm);
