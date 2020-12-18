import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { END } from 'redux-saga';
import { OpenLinkSingle } from '../../css/single';
import useInput from '../../exp/useInput';
import wrapper from '../../store/configureStore';
import { RELOAD_USER_REQUEST } from '../../reducers/user';
import OnClickDesc from '../../components/OnClickDesc';
import BoardSideBar from '../../components/boardSideBar';

const SingleCard = () => {
  const [changeTitle, onChangeTitle, setChangeTitle] = useInput('');
  const [modifyTitle, setModifyTitle] = useState(false);
  const [inputDesc, setInputDesc] = useState(false);
  const changeToModifyTitle = useCallback(() => {
    if (changeTitle) {
      console.log(changeTitle);
      setChangeTitle('');
    }
    setModifyTitle((prev) => !prev);
  }, [changeTitle]);

  const onToggleDesc = useCallback(() => {
    setInputDesc((prev) => !prev);
  }, [inputDesc]);
  return (
    <div css={OpenLinkSingle}>
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
          {inputDesc ? (
            <OnClickDesc
              setInputDesc={setInputDesc}
              inputDesc={inputDesc}
              onToggleDesc={onToggleDesc}
            />
          ) : (
            <p onClick={onToggleDesc}>Add a more detailed description...</p>
          )}
        </div>
        <BoardSideBar />
      </div>
    </div>
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
