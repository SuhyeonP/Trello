const createCard = async (db, cardData) => {
  const newCardData = db.card.build(cardData);

  try {
    return await newCardData.save();
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default { createCard };
