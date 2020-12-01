import React from 'react';
import { listWrapper } from '../css/mainboard';

const ListCards = () => (
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
      </div>
    </div>
  </div>
);
export default ListCards;
