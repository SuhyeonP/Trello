const getCard = async (models, boardId) => {
  const cardData = await models.card.findAll({
    where: {
      boardId: Number(boardId),
    },
  });

  return cardData.filter(card => {
    return card.dataValues;
  });
};

const createCard = async (db, cardData) => {
  const newCardData = db.card.build(cardData);

  try {
    return await newCardData.save();
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default { createCard, getCard };
