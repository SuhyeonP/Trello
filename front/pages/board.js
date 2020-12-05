import React, { useCallback, useState } from 'react';
import BoardLayout from '../components/BoardTest';
import { listWrapper } from '../css/mainboard';
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

  return (
    <>
      <BoardLayout>
        <div>
          <div css={listWrapper}>
            <div className="list">
              <div className="list-header">
                <h2>Title</h2>
              </div>
              <div className="list-cards">
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
                <div className="list-card"><p>test</p></div>
              </div>
            </div>
          </div>
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
