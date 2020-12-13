import React, { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { useRouter } from 'next/router';
import { MoreOutlined } from '@ant-design/icons';
import { listWrapper } from '../css/mainboard';
import useInput from '../exp/useInput';
import AddOrClose from './addorclose';
import ListCardsMap from './listCardsMap';

const ListCards = ({ openSingle }) => {
  const [changeTitle, setChangeTitle] = useState(false);
  const [sortList, setSortList] = useState(false);
  const [modifyListTitle, onChangeListTitle] = useInput('');
  const [addCardTitle, onChangeAddCardTitle] = useInput('');
  const [openAddCard, setOpenAddCard] = useState(false);
  const [focusOnListTitle, setFocusListTitle] = useState(false);
  const [cards, setCards] = useState(['test1', 'test2', 'test3', 'test4']);
  const router = useRouter();

  const setListTitleChange = useCallback(() => {
    setChangeTitle(true);
    setFocusListTitle(true);
    document.getElementById('list-title-input');
  }, [changeTitle]);

  const closeInputListTitle = useCallback(() => {
    setChangeTitle(false);
  }, [changeTitle]);

  const addCardToSend = useCallback(() => {
    setOpenAddCard(false);
    console.log(addCardTitle);
    router.push('/board');
  }, [addCardTitle]);

  const openAddCardForm = useCallback(() => {
    setOpenAddCard(true);
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  const closeCardForm = useCallback(() => {
    setOpenAddCard(false);
  }, []);

  const sortingCards = useCallback(() => {
    setSortList((prev) => !prev);
  }, [sortList]);

  return (
    <div css={listWrapper}>
      <div className="list">
        <div className="list-header">
          {!changeTitle && (
            <h2 id="origin-title" onClick={setListTitleChange}>
              test
            </h2>
          )}
          {changeTitle && (
            <input
              autoFocus={focusOnListTitle}
              id="list-title-input"
              onBlur={closeInputListTitle}
              className="input-list-title"
              onChange={onChangeListTitle}
              value={modifyListTitle}
            />
          )}
          <span className="sorting-button">
            <MoreOutlined onClick={sortingCards} />
            {sortList && (
              <ul className="sort-setting">
                <li>
                  <button type="button">최신순</button>
                </li>
                <li>
                  <button type="button">오래된순</button>
                </li>
                <li>
                  <button type="button">내맘대루</button>
                </li>
              </ul>
            )}
          </span>
        </div>
        <ListCardsMap openSingle={openSingle} cards={cards} setCards={setCards} />
        <div className="list-cards">
          {openAddCard && (
            <div className="add-card-form">
              <Form onFinish={addCardToSend}>
                <div className="add-card-input">
                  <textarea
                    placeholder="Enter a title for this card..."
                    value={addCardTitle}
                    onChange={onChangeAddCardTitle}
                  />
                </div>
                <AddOrClose addText="Add Card" onClickToClose={closeCardForm} />
              </Form>
            </div>
          )}
        </div>
        {!openAddCard && (
          <div onClick={openAddCardForm} className="add-card">
            <div>
              <span>+</span>
              <span>Add card</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ListCards.propTypes = {
  openSingle: PropTypes.func.isRequired,
  listsMapTitle: PropTypes.string.isRequired,
};
export default memo(ListCards);
