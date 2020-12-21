import { createDate } from '../util/createDate.js';

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

const getBoard = async (db, id) => {
  const data = await db.board.findOne({
    where: { userId: id },
  });
  return data;
};

const modifyTitle = async (db, modifyData) => {
  await db.board.update(
    {
      boardTitle: modifyData.boardTitle,
    },
    {
      where: { boardId: modifyData.boardId },
    },
  );
  const data = await db.board.findByPk(modifyData.boardId);
  return data;
};

const modifyBG = async (db, backgroundData) => {
  await db.board.update(
    {
      backgroundValue: backgroundData.backgroundValue,
    },
    {
      where: { boardId: backgroundData.boardId },
    },
  );
  const data = await db.board.findByPk(backgroundData.boardId);
  return data;
};

export default { modifyBG, modifyTitle, createBoard, getBoard };
