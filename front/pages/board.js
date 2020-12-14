import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListCards from '../components/listCards';

import Lists from '../components/lists';
import InnerCard from '../components/innerCard';
import BoardLayout from '../components/mainBoard';
import BoardMenu from '../components/boardMenu';
import { LOAD_MAIN_REQUEST } from '../reducers/board';
import useInput from '../exp/useInput';

const Board = () => {
  const [openFrame, setOpenFrame] = useState('');
  const [canIopen, setCanIopen] = useState(false);
  const [canIopenMenu, setCanIopenMenu] = useState(false);
  const [changeBoardTitle, setChangeTitle] = useState(false);
  const [boardTitle, onChangeBoardTitle, setBoardTitle] = useInput('');
  const [focusOnTitle, setFocus] = useState(false);
  // const dispatch = useDispatch();
  // const { me } = useSelector((state) => state.user);
  // const { mainLists } = useSelector((state) => state.board);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MAIN_REQUEST,
  //     data: { userId: me.userId },
  //   });
  // }, []);

  const openSingle = useCallback(
    (openLink) => {
      setOpenFrame(openLink);
      setCanIopen(true);
    },
    [openFrame, canIopen],
  );

  const closeFrame = useCallback(() => {
    setCanIopen(false);
  }, [openFrame]);

  const openTheMenu = useCallback(() => {
    setCanIopenMenu(true);
  }, [canIopenMenu]);

  const modifyBoardTitle = useCallback(() => {
    if (changeBoardTitle) {
      console.log(boardTitle);
      if (boardTitle === null) {
        return;
      }
      // send request to change title
      setBoardTitle('');
    }
    setChangeTitle((prev) => !prev);
    setFocus((prev) => !prev);
  }, [changeBoardTitle, focusOnTitle, boardTitle]);

  return (
    <>
      <BoardLayout>
        <div className="board-header-title">
          <div className="project-title">
            {changeBoardTitle ? (
              <input
                onBlur={modifyBoardTitle}
                autoFocus={focusOnTitle}
                value={boardTitle}
                onChange={onChangeBoardTitle}
              />
            ) : (
              <h1 onClick={modifyBoardTitle}>Board-title</h1>
            )}
          </div>
          <div className="showMenu-btn">
            <button className="showMenu-Button" type="button" onClick={openTheMenu}>
              Show Menu
            </button>
            {canIopenMenu
            && (
            <BoardMenu
              canIopenMenu={canIopenMenu}
              setCanIopenMenu={setCanIopenMenu}
            />
            )}
          </div>
        </div>
        <div className="showing-board-inList">
          <Lists openSingle={openSingle} />
          {canIopen && <InnerCard iframeSrc={openFrame} onCloseFrame={closeFrame} />}
        </div>
      </BoardLayout>
    </>
  );
};

export default Board;
// maybe ssr will be realized here.
