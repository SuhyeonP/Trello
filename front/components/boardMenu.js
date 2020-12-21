import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { boardMenu } from '../css/mainboard';
import { MODIFY_BOARD_REQUEST } from '../reducers/board';

const ChangeBoardColor = styled.span`
    border-radius: 3px;
    background-color:${(props) => props.color || 'rgb(0, 121, 191)'};
`;

const PickBackgroundColor = styled.p`
    background-color:${(props) => props.color || 'rgb(0, 121, 191)'};
    display:inline-block;
    cursor:pointer;
`;

const BoardMenu = ({ me, logoutBtn, setCanIopenMenu, canIopenMenu }) => {
  const [changeBoardBack, setChangeBoardBack] = useState(false);
  const [menuTitle, setMenuTitle] = useState('Menu');
  const [originMenu, setOriginMenu] = useState(true);
  const [testUpdatedAt, setTestUpdatedAt] = useState(false);
  const [testContent, setTestContent] = useState('list card Title');
  const [colorIndex, setColorIndex] = useState(0);
  const { mainLists } = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const dummyColor = [null, 'navy', 'green'];

  const changeToBoardBack = useCallback(() => {
    setMenuTitle('Change Background');
    setOriginMenu(false);
    setChangeBoardBack(true);
  }, []);

  const closeTheMenu = useCallback(() => {
    setCanIopenMenu(false);
  }, [canIopenMenu]);

  const goBackOrigin = useCallback(() => {
    setMenuTitle('Menu');
    setOriginMenu(true);
    setChangeBoardBack(false);
  }, []);

  const changeColor = useCallback(() => {
    if (colorIndex === dummyColor.length - 1) {
      setColorIndex(0);
    } else {
      setColorIndex((prev) => prev + 1);
    }
  }, [colorIndex]);

  const pickBoardBackground = useCallback(() => {
    const temp = dummyColor[colorIndex];
    console.log(temp);
    dispatch({
      type: MODIFY_BOARD_REQUEST,
      data: { backgroundValue: temp, boardId: mainLists.boardId },
    });
  }, [colorIndex]);

  return (
    <div css={boardMenu}>
      <div>
        <div className="menu-title-div">
          <div>
            {changeBoardBack && <button type="button" className="close-menu" onClick={goBackOrigin}>{'<'}</button>}
            <p className="menu-title">{menuTitle}</p>
            <button type="button" className="close-menu" onClick={closeTheMenu}>X</button>
          </div>
          <hr className="menu-underline" />
        </div>
        <div className="hi-user">
          <h2>Welcome, {me.userNickName}.<br /> This is your Board</h2>
        </div>
        <div className="inner-menu">
          {originMenu && (
          <>
            <div onClick={changeToBoardBack} className="change-background">
              <div className="change-bc">
                <ChangeBoardColor />
                {/* <ChangeBoardColor color={} /> */}
                <p>Change Background</p>
              </div>
            </div>
            <hr className="menu-underline" />
            <div className="logout-btn">
              <button onClick={logoutBtn} type="button">Logout</button>
            </div>
            <hr className="menu-underline" />
            <div className="timeline-title">
              <span />
              <h2>activity</h2>
            </div>
            <hr className="menu-underline" />
            <div className="timeline-onBoard">
              <div className="timeline-oneline">
                <span />
                <p>{testUpdatedAt ? 'Move' : 'Added'} content {testUpdatedAt ? `from ${testContent}` : null} to ListOrCardName</p>
              </div>
              <div className="timeline-oneline">
                <span />
                <p>{!testUpdatedAt ? 'Move' : 'Added'} content {!testUpdatedAt ? `from ${testContent}` : null} to ListOrCardName</p>
              </div>
            </div>
          </>
          )}
          {changeBoardBack && (
          <>
            <div className="background-holder">
              <div>
                <p>When you pick you want, click title.</p>
                <div className="background-is">
                  <div>
                    <PickBackgroundColor
                      onClick={changeColor}
                      color={dummyColor[colorIndex]}
                    />
                    <h5>you can click to go another</h5>
                  </div>
                  <p onClick={pickBoardBackground}>color</p>
                </div>
              </div>
            </div>
          </>
          )}
        </div>
      </div>
    </div>
  );
};

BoardMenu.propTypes = {
  setCanIopenMenu: PropTypes.any.isRequired,
  canIopenMenu: PropTypes.bool.isRequired,
  logoutBtn: PropTypes.func.isRequired,
  me: PropTypes.any.isRequired,
};

export default memo(BoardMenu);
