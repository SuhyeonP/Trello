<<<<<<< HEAD
import React, { memo, useState } from 'react';
=======
import React, { memo, useEffect, useState } from 'react';
>>>>>>> master
import PropTypes from 'prop-types';
import ListsMap from './listsMap';

const Lists = ({ openSingle }) => {
  const [lists, setLists] = useState(['ListTest1', 'ListTest2', 'ListTest3', 'ListTest4']);

<<<<<<< HEAD
=======
  useEffect(() => {
    console.log(lists);
  }, [lists]);

>>>>>>> master
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
