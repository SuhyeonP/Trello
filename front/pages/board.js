import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Lists from '../components/lists';
import InnerCard from '../components/innerCard';
import BoardLayout from '../components/mainBoard';
import BoardMenu from '../components/boardMenu';
import { LOAD_MAIN_REQUEST } from '../reducers/board';
import useInput from '../exp/useInput';
import { LOG_OUT_REQUEST, RELOAD_USER_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const Board = () => {
  const [openFrame, setOpenFrame] = useState('');
  const [canIopen, setCanIopen] = useState(false);
  const [canIopenMenu, setCanIopenMenu] = useState(false);
  const [changeBoardTitle, setChangeTitle] = useState(false);
  const [boardTitle, onChangeBoardTitle, setBoardTitle] = useInput('');
  const [focusOnTitle, setFocus] = useState(false);
  const { me, logOutDone } = useSelector((state) => state.user);
  // const { mainLists } = useSelector((state) => state.board);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MAIN_REQUEST,
  //     data: { userId: me.userId },
  //   });
  // }, []);
  useEffect(() => {
    if (!me) {
      alert('Only Member');
      window.location.href = '/';
    }
  }, [me]);
  useEffect(() => {
    if (logOutDone) {
      window.location.href = '/';
    }
  }, [logOutDone]);

  const logOutBtn = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

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
              me={me}
              logoutBtn={logOutBtn}
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

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  console.log(cookie, 'this is cookie');
  context.store.dispatch({
    type: RELOAD_USER_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Board;
