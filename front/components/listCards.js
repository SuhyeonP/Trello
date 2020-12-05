import React from 'react';
import PropTypes from 'prop-types';
import { listWrapper } from '../css/mainboard';

const ListCards = ({ openSingle }) => (
  <div css={listWrapper}>
    <div className="list">
      <div className="list-header">
        <h2>Title</h2>
      </div>
      <div className="list-cards">
        <div className="list-card"><p onClick={() => openSingle('/board/1')}>test</p></div>
        <div className="list-card"><p>test</p></div>
        <div className="list-card"><p>test</p></div>
        <div className="list-card"><p>test</p></div>
        <div className="list-card"><p>test</p></div>
        <div className="list-card"><p>test</p></div>
      </div>
    </div>
  </div>
);

ListCards.propTypes = {
  openSingle: PropTypes.func.isRequired,
};
export default ListCards;
