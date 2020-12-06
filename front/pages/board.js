import React, { useCallback, useState } from 'react';
import BoardLayout from '../components/BoardTest';
import ListCards from '../components/listCards';
import ListForm from '../components/listForm';
import InnerCard from '../components/innderCard';

function Board() {
  const [openFrame, setOpenFrame] = useState('');
  const [canIopen, setCanIopen] = useState(false);

  const openSingle = useCallback((openLink) => {
    setOpenFrame(openLink);
    setCanIopen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setCanIopen(false);
  }, [openFrame]);

  const openTheMenu = useCallback(() => {

  }, []);

  return (
    <>
      <BoardLayout>
        <div className="board-header-title">
          <div className="project-title">
            <h1>Board-title</h1>
          </div>
          <div className="showMenu-btn">
            <button type="button" onClick={openTheMenu}>
              Show Menu
            </button>
          </div>
        </div>
        <div>
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
}

export default Board;
