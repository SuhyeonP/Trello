import React, { useCallback, useState } from 'react';
import ListCards from '../components/listCards';
import ListForm from '../components/listForm';
import InnerCard from '../components/innerCard';
import BoardLayout from '../components/mainBoard';
import { boardMenu } from '../css/mainboard';
import BoardMenu from '../components/boardMenu';

const Board = () => {
  const [openFrame, setOpenFrame] = useState('');
  const [canIopen, setCanIopen] = useState(false);
  const [canIopenMenu, setCanIopenMenu] = useState(false);

  const openSingle = useCallback((openLink) => {
    setOpenFrame(openLink);
    setCanIopen(true);
  }, [openFrame, canIopen]);

  const closeFrame = useCallback(() => {
    setCanIopen(false);
  }, [openFrame]);

  const openTheMenu = useCallback(() => {
    setCanIopenMenu(true);
  }, [canIopenMenu]);

  return (
    <>
      <BoardLayout>
        <div className="board-header-title">
          <div className="project-title">
            <h1>Board-title</h1>
          </div>
          <div className="showMenu-btn">
            <button className="showMenu-Button" type="button" onClick={openTheMenu}>
              Show Menu
            </button>
            {canIopenMenu && (
              <BoardMenu canIopenMenu={canIopenMenu} setCanIopenMenu={setCanIopenMenu} />
            )}
          </div>
        </div>
        <div className="showing-board-inList">
          <ListCards openSingle={openSingle} />
          <ListCards openSingle={openSingle} />
          {canIopen
          && (
          <InnerCard iframeSrc={openFrame} onCloseFrame={closeFrame} />
          )}
          <ListForm />
        </div>
      </BoardLayout>
    </>
  );
};

export default Board;
