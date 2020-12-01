import React from 'react';
import BoardLayout from '../components/BoardTest';
import { listWrapper } from '../css/mainboard';
import ListCards from '../components/listCards';
import ListForm from '../components/listForm';

function Board() {
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
          <ListCards />
          <ListForm />
        </div>
      </BoardLayout>
    </>
  );
}

export default Board;
