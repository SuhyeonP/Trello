import React from 'react';
import PropTypes from 'prop-types';
import { mainBoardSection } from '../css/mainboard';
import useInput from '../exp/useInput';

const BoardLayout = ({ children }) => {
  const [search, onChangeSearch] = useInput('');

  return (
    <div css={mainBoardSection}>
      <header>
        <div className="searching-zone">
          <input
            onChange={onChangeSearch}
            value={search}
            placeholder="Search word"
          />
        </div>
        <p>fake trello</p>
      </header>
      {children}
    </div>
  );
};
BoardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoardLayout;
