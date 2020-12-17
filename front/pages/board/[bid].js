import React, { useCallback, useState } from "react";
import { OpenLinkSingle } from "../../css/single";
import useInput from "../../exp/useInput";
import {
  AlignLeftOutlined,
  UserOutlined,
  ArrowRightOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
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
      </div>
      <div className="main">
        <div className="main-col">
          {/* <AlignLeftOutlined /> */}
          <h2>Description</h2>
          {InputDesc ? (
            <OnClickDesc onToggleDesc={onToggleDesc} />
          ) : (
            <p onClick={onToggleDesc}>Add a more detailed description...</p>
          )}
        </div>
        <div className="sidebar">
          <h3>ADD TO CARD</h3>
          <div className="card-bar">
            <p>
              <UserOutlined style={{ marginRight: "6px" }} /> Members
            </p>
            <p>
              <UserOutlined style={{ marginRight: "6px" }} /> Checklist
            </p>
          </div>
          <h3>ACTIONS</h3>
          <div className="card-bar">
            <p>
              <ArrowRightOutlined style={{ marginRight: "6px" }} />
              Move
            </p>
            <p>
              <DeleteOutlined style={{ marginRight: "6px" }} />
              Delete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCard;
