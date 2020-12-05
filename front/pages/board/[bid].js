import React, { useCallback, useState } from 'react';
import { OpenLinkSingle } from '../../css/single';
import useInput from '../../exp/useInput';

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
export default SingleCard;
