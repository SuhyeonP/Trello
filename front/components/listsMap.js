import React, { memo } from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';
import { MenuOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import ListCards from './listCards';
import ListForm from './listForm';

const TheList = styled.div`
  display: inline-block;
  position: relative;
`;

const ListsMap = ({ lists, setLists, openSingle }) => {
  const DragHandle = SortableHandle(() => <MenuOutlined className="moving-list" />);

  const onSortEnd = ({ oldIndex, newIndex }) => setLists(arrayMove(lists, oldIndex, newIndex));

  const SortableItem = SortableElement(({ element, sortIndex }) => (
    <TheList element={element} sortIndex={sortIndex}>
      <ListCards openSingle={openSingle} cardLists={element.cards} />
      <DragHandle />
    </TheList>
  ));

  const SortableList = SortableContainer(() => (
    <div className="display-board">
      {lists &&
        lists.map((element, index) => (
          <SortableItem key={`item-${index}`} index={index} sortIndex={index} element={element} />
        ))}
      <ListForm />
    </div>
  ));

  return (
    <SortableList axis="x" onSortEnd={onSortEnd} useDragHandle>
      {lists &&
        lists.map((e, i) => <SortableItem key={`item-${i}`} index={i} sortIndex={i} element={e} />)}
    </SortableList>
  );
};

ListsMap.propTypes = {
  lists: PropTypes.array.isRequired,
  setLists: PropTypes.func.isRequired,
  openSingle: PropTypes.func.isRequired,
};

export default memo(ListsMap);
