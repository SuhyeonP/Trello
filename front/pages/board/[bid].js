import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { END } from 'redux-saga';
import { OpenLinkSingle } from '../../css/single';
import useInput from '../../exp/useInput';
import wrapper from '../../store/configureStore';
import { RELOAD_USER_REQUEST } from '../../reducers/user';
import BoardSideBar from '../../components/boardSideBar';
import ModalCover from '../../components/modalCover';
import ModalDescription from '../../components/modalDescription';
import ModifyDescription from '../../components/modifyDescription';
import CheckList from '../../components/checkList';

const SingleCard = () => {
  const [changeTitle, onChangeTitle, setChangeTitle] = useInput('');
  const [modifyTitle, setModifyTitle] = useState(false);
  const [openCover, setOpenCover] = useState(false);
  const [modalContent, setModalContent] = useState(false);
  const [modalCover, setModalCover] = useState('#f4f5f7');
  const [colorIn, setColorIn] = useState(false);
  const [openCheckList, setOpenCheckList] = useState(false);

  const colorArray = ['#5ba4cf', '#7bc86c', '#6deca9', '#fffff3', 'skyblue', '#cd8de5'];
  const changeToModifyTitle = useCallback(() => {
    if (changeTitle) {
      console.log(changeTitle);
      setChangeTitle('');
    }
    setModifyTitle((prev) => !prev);
  }, [changeTitle]);

  const openChangeCover = useCallback(() => {
    console.log(openCover);
    setOpenCover((prev) => !prev);
  }, [openCover]);

  const openTodoList = useCallback(() => {
    setOpenCheckList((prevState) => !prevState);
  }, [openCheckList]);

  useEffect(() => {
    if (modalCover !== '#f4f5f7') {
      setColorIn(true);
    } else {
      setColorIn(false);
    }
  }, [modalCover]);

  return (
    <OpenLinkSingle color={modalCover}>
      <div className="white-zone">
        <div className="board-title">
          <span>✅</span>
          <div className="real-title">
            {!modifyTitle && <h2 onClick={changeToModifyTitle}>Title</h2>}
            {modifyTitle && (
            <input
              onBlur={changeToModifyTitle}
              autoFocus={modifyTitle}
              onChange={onChangeTitle}
              value={changeTitle}
            />
            )}
          </div>
          <div className="little-title">
            <p>in list : origin-list-name</p>
          </div>
        </div>
        <div className="main">
          <div className="main-col">
            {/* <AlignLeftOutlined /> */}
            <h2>Description</h2>
            {modalContent
              ? <ModifyDescription />
              : (
                <ModalDescription
                  setModalContent={setModalContent}
                />
              )}
            <br />
            {openCheckList && <CheckList />}
            <br />
            {openCover
            && (
            <ModalCover
              colorIn={colorIn}
              modalCover={modalCover}
              colorArray={colorArray}
              setModalCover={setModalCover}
            />
            )}
          </div>
          <BoardSideBar openTodoList={openTodoList} openChangeCover={openChangeCover} />
        </div>
      </div>
    </OpenLinkSingle>
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
export default SingleCard;
