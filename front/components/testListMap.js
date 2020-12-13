import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';

const TestListMap = ({ lists, setLists }) => {
  const onSortEnd = ({ oldIndex, newIndex }) => setLists(arrayMove(lists, oldIndex, newIndex));

  const SortableItem = SortableElement(({ value, sortIndex }) => (
    <div className="list-card">
      {value} - #{sortIndex}
    </div>
  ));

  const SortableList = SortableContainer(() => (
    <div className="list-cards">
      {lists.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} sortIndex={index} value={value} />
      ))}
    </div>
  ));
  return (
    <SortableList axis="y" onSortEnd={onSortEnd}>
      {lists.map((e, i) => (
        <SortableItem index={i} key={`item-${i}`} sortIndex={i} value={e} />
      ))}
    </SortableList>
  );
};

TestListMap.propTypes = {
  lists: PropTypes.array.isRequired,
  setLists: PropTypes.func.isRequired,
};

export default TestListMap;
