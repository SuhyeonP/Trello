import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ListsMap from './listsMap';

const Lists = ({ openSingle }) => {
  const { mainLists } = useSelector((state) => state.board);
  const [lists, setLists] = useState(mainLists && mainLists.lists);

  return <>{lists && <ListsMap lists={lists} setLists={setLists} openSingle={openSingle} />}</>;
};

Lists.propTypes = {
  openSingle: PropTypes.func.isRequired,
};

export default memo(Lists);
