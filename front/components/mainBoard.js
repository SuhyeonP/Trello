<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MainBoardSection } from '../css/mainboard';
=======
import React from 'react';
import PropTypes from 'prop-types';
import { mainBoardSection } from '../css/mainboard';
>>>>>>> master
import useInput from '../exp/useInput';

const BoardLayout = ({ children }) => {
  const [search, onChangeSearch] = useInput('');
<<<<<<< HEAD
  const { mainLists } = useSelector((state) => state.board);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    setBgColor(mainLists.backgroundValue);
  }, [mainLists]);

  return (
    <MainBoardSection color={bgColor}>
=======

  return (
    <div css={mainBoardSection}>
>>>>>>> master
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
<<<<<<< HEAD
    </MainBoardSection>
=======
    </div>
>>>>>>> master
  );
};
BoardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoardLayout;
