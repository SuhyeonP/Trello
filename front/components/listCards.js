import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { useRouter } from 'next/router';
import { listWrapper } from '../css/mainboard';
import useInput from '../exp/useInput';
import AddOrClose from './addorclose';

const ListCards = ({ openSingle }) => {
  const [changeTitle, setChangeTitle] = useState(false);
  const [modifyListTitle, onChangeListTitle] = useInput('');
  const [addCardTitle, onChangeAddCardTitle] = useInput('');
  const [openAddCard, setOpenAddCard] = useState(false);
  const router = useRouter();

  const setListTitleChange = useCallback(() => {
    setChangeTitle(true);
  }, []);

  const closeInputListTitle = useCallback(() => {
    setChangeTitle(false);
  }, []);

  const addCardToSend = useCallback(() => {
    setOpenAddCard(false);
    console.log(addCardTitle);
    router.push('/board');
  }, [addCardTitle]);

  const openAddCardForm = useCallback(() => {
    setOpenAddCard(true);
  }, []);

  const closeCardForm = useCallback(() => {
    setOpenAddCard(false);
  }, []);

  return (
    <div css={listWrapper}>
      <div className="list">
        <div className="list-header">
          {!changeTitle && <h2 id="origin-title" onClick={setListTitleChange}>Title</h2>}
          {changeTitle && <input id="list-title-input" onBlur={closeInputListTitle} className="input-list-title" onChange={onChangeListTitle} value={modifyListTitle} />}
        </div>
        <div className="list-cards">
          <div className="list-card"><p onClick={() => openSingle('/board/1')}>test</p></div>
          <div className="list-card"><p>test</p></div>
          <div className="list-card"><p>test</p></div>
          <div className="list-card"><p>test</p></div>
          <div className="list-card"><p>test</p></div>
          <div className="list-card"><p>test</p></div>
          {openAddCard && (
          <div className="add-card-form">
            <Form onFinish={addCardToSend}>
              <div className="add-card-input">
                <textarea placeholder="Enter a title for this card..." value={addCardTitle} onChange={onChangeAddCardTitle} />
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
};
export default ListCards;
