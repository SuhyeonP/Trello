const createDate = date => {
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const createBoard = async (db, boardData) => {
  try {
    const result = await db.board.create(boardData);
    const returnValues = await result.get();

    const newDateString = createDate(returnValues.createdAt);
    returnValues.createdAt = newDateString;
    returnValues.updatedAt = newDateString;

    return returnValues;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const getBoard = async db => {
  const data = await db.board.findAll();
  return data;
};

export default { createBoard, getBoard };
