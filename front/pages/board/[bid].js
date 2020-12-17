import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { END } from 'redux-saga';
import { OpenLinkSingle } from '../../css/single';
import useInput from '../../exp/useInput';
import wrapper from '../../store/configureStore';
import { RELOAD_USER_REQUEST } from '../../reducers/user';

const SingleCard = () => {
  const [changeTitle, onChangeTitle] = useInput('');
  const [modifyTitle, setModifyTitle] = useState(false);

  const changeToModifyTitle = useCallback(() => {
    setModifyTitle(true);
  }, [changeTitle]);

  const closeInputs = useCallback(() => {
    if (modifyTitle) {
      setModifyTitle(false);
    }
  }, [modifyTitle]);

  return (
    <div css={OpenLinkSingle}>
      <div className="board-title">
        <span>✅</span>
        <div className="real-title">
          {!modifyTitle && <h2 onClick={changeToModifyTitle}>Title</h2>}
          {modifyTitle && <input onChange={onChangeTitle} value={changeTitle} />}
        </div>
        <div className="little-title">
          <p>in list : origin-list-name</p>
        </div>
      </div>
      <div className="" onClick={closeInputs}>
        <p>zone</p>
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
