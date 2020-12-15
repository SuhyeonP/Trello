import React, { useCallback, useState } from "react";
import { OpenLinkSingle } from "../../css/single";
import useInput from "../../exp/useInput";
import { AlignLeftOutlined } from "@ant-design/icons";
import OnClickDesc from "../../components/OnClickDesc";

const SingleCard = () => {
  const [changeTitle, onChangeTitle] = useInput("");
  const [modifyTitle, setModifyTitle] = useState(false);
  const [InputDesc, setInputDesc] = useState(false);
  const changeToModifyTitle = useCallback(() => {
    setModifyTitle(true);
  }, [changeTitle]);

  const closeInputs = useCallback(() => {
    if (modifyTitle) {
      setModifyTitle(false);
    }
  }, [modifyTitle]);

  const onToggleDesc = useCallback(() => {
    setInputDesc(!InputDesc);
  }, [InputDesc]);
  return (
    <div css={OpenLinkSingle}>
      <div className="board-title">
        <span>✅</span>
        <div className="real-title">
          {!modifyTitle && <h2 onClick={changeToModifyTitle}>Title</h2>}
          {modifyTitle && (
            <input onChange={onChangeTitle} value={changeTitle} />
          )}
        </div>
        <div className="little-title">
          <p>in list : origin-list-name</p>
        </div>
        <div className="real-title">
          {/* <AlignLeftOutlined /> */}
          <h2>Description</h2>
          {InputDesc ? (
            <OnClickDesc onToggleDesc={onToggleDesc} />
          ) : (
            <p onClick={onToggleDesc}>Add a more detailed description...</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default SingleCard;
