import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListsMap from './listsMap';

const Lists = ({ openSingle }) => {
  const [lists, setLists] = useState(['ListTest1', 'ListTest2', 'ListTest3', 'ListTest4']);

  useEffect(() => {
    console.log(lists);
  }, [lists]);

  return (
    <>
      <ListsMap lists={lists} setLists={setLists} openSingle={openSingle} />
    </>
  );
};

Lists.propTypes = {
  openSingle: PropTypes.func.isRequired,
};

export default memo(Lists);
