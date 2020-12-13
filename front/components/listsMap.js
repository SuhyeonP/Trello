import React, { memo } from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';
import ListCards from './listCards';

const ListsMap = ({ lists, setLists, openSingle }) => {
  const DragHandle = SortableHandle(() => <span>[btn]</span>);

  const onSortEnd = ({ oldIndex, newIndex }) => setLists(arrayMove(lists, oldIndex, newIndex));

  const SortableItem = SortableElement(({ value, sortIndex }) => (
    <div style={{ display: 'inline-block' }} value={value} sortIndex={sortIndex}>
      <ListCards openSingle={openSingle} />
      <DragHandle />
    </div>
  ));

  const SortableList = SortableContainer(() => (
    <div>
      {lists.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} sortIndex={index} value={value} />
      ))}
    </div>
  ));

  return (
    <SortableList axis="x" onSortEnd={onSortEnd} useDragHandle>
      {lists.map((e, i) => (
        <SortableItem key={`item-${i}`} index={i} sortIndex={i} value={e} />
      ))}
    </SortableList>
  );
};

ListsMap.propTypes = {
  lists: PropTypes.array.isRequired,
  setLists: PropTypes.func.isRequired,
  openSingle: PropTypes.func.isRequired,
};

export default memo(ListsMap);
