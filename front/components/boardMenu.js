import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { boardMenu } from '../css/mainboard';

const ChangeBoardColor = styled.span`
    border-radius: 3px;
    background-color:${(props) => props.color || 'rgb(0, 121, 191)'};
`;

const PickBackgroundColor = styled.p`
    background-color:${(props) => props.color || 'rgb(0, 121, 191)'};
`;

const BoardMenu = ({ me, logoutBtn, setCanIopenMenu, canIopenMenu }) => {
  const [changeBoardBack, setChangeBoardBack] = useState(false);
  const [menuTitle, setMenuTitle] = useState('Menu');
  const [originMenu, setOriginMenu] = useState(true);
  const [testUpdatedAt, setTestUpdatedAt] = useState(false);
  const [testContent, setTestContent] = useState('list card Title');
  const [colorIndex, setColorIndex] = useState(0);
  const [ImgIndex, setImgIndex] = useState(0);

  const backgroundIs = ['color', 'img'];
  const dummyColor = [null, 'white', '#fffff3'];

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

  const changeImg = useCallback(() => {
    if (ImgIndex === 6) {
      setImgIndex(0);
    } else {
      setImgIndex((prev) => prev + 1);
    }
  }, [ImgIndex]);

  const changeColor = useCallback(() => {
    if (colorIndex === dummyColor.length - 1) {
      setColorIndex(0);
    } else {
      setColorIndex((prev) => prev + 1);
    }
  }, [colorIndex]);

  const pickBoardBackground = useCallback((kind) => {
    let temp;
    if (kind === 'img') {
      temp = `not yet${ImgIndex}`;
    } else {
      temp = dummyColor[colorIndex];
    }
    if (temp === null) {
      console.log('nothing change');
    } else {
      console.log(temp);
    }
  }, [colorIndex, ImgIndex]);

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
          <h2>Welcome, {me.userNickName}.<br/> This is your Board</h2>
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
                {backgroundIs.map((x, ind) => (
                  <div className="background-is" key={ind}>
                    <div>
                      {x === 'color'
                        ? (
                          <>
                            <PickBackgroundColor
                              onClick={changeColor}
                              color={dummyColor[colorIndex]}
                            />
                          </>
                        )
                        : <img onClick={changeImg} id="pick-img" src="" />}
                      <h5>you can click to go another</h5>
                    </div>
                    <p onClick={() => pickBoardBackground(x)}>{x}</p>
                  </div>
                ))}
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
