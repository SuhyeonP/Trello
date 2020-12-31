import React, { memo } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';
import { MenuOutlined } from '@ant-design/icons';

const ListCardsMap = ({ cards, setCards, openSingle }) => {
  const onSortEnd = ({ oldIndex, newIndex }) => setCards(arrayMove(cards, oldIndex, newIndex));

  const SortableItem = SortableElement(({ element, sortIndex }) => (
    <div className="list-card">
      <p onMouseDownCapture={() => openSingle(`/board/${element.cardId}`)}>
        {element.cardTitle} - #{sortIndex}←this will be erased
      </p>
      <MenuOutlined className="moving-card" />
    </div>
  ));

  const SortableList = SortableContainer(() => (
    <div className="list-cards">
      {cards &&
        cards.map((element, index) => (
          <SortableItem key={`item-${index}`} index={index} sortIndex={index} element={element} />
        ))}
    </div>
  ));
  return (
    <SortableList axis="y" onSortEnd={onSortEnd}>
      {cards &&
        cards.map((e, i) => <SortableItem index={i} key={`item-${i}`} sortIndex={i} element={e} />)}
    </SortableList>
  );
};

ListCardsMap.propTypes = {
  cards: PropTypes.array.isRequired,
  setCards: PropTypes.func.isRequired,
  openSingle: PropTypes.func.isRequired,
};

export default memo(ListCardsMap);
