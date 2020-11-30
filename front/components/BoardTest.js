import React from 'react';
import { Input } from 'antd';
import { mainBoardSection } from '../css/mainboard';
import useInput from '../exp/useInput';

const BoardLayout = ({ children }) => {
  const [search, onChangeSearch] = useInput('');
  return (
    <div css={mainBoardSection}>
      <header>
        <Input.Search onChange={onChangeSearch} value={search} />
        <p>Fake trello</p>
      </header>
      {children}
    </div>
  );
};
export default BoardLayout;
