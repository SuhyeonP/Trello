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

  return (
    <>
      <BoardLayout>
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
