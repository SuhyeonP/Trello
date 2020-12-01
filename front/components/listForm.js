import React, { useCallback, useState } from 'react';
import useInput from '../exp/useInput';
import { makeBoard } from '../css/mainboard';

const ListForm = () => {
  const [listTitle, setListTitle] = useInput('');
  const [inputMode, setInputMode] = useState(false);
  const [togOn, setToggle] = useState(true);
  const makingBoard = useCallback(() => {

  }, [listTitle]);

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
        <form onSubmit={makingBoard}>
          <div className="title-inputmode">
            <input value={listTitle} onChange={setListTitle} />
            <div className="inputbutton-close">
              <button type="button" className="addButton">Add List</button>
              <button className="closeBtn" onClick={openInputTitle} type="button">Close</button>
            </div>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};
export default ListForm;
