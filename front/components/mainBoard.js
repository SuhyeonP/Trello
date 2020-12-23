import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MainBoardSection } from '../css/mainboard';
import useInput from '../exp/useInput';

const BoardLayout = ({ children }) => {
  const [search, onChangeSearch] = useInput('');
  const { mainLists } = useSelector((state) => state.board);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    setBgColor(mainLists.backgroundValue);
  }, [mainLists]);

  return (
    <MainBoardSection color={bgColor}>
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
    </MainBoardSection>
  );
};
BoardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoardLayout;
