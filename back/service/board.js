<<<<<<< HEAD
import { createDate } from '../util/createDate.js';
=======
const createDate = date => {
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
>>>>>>> master

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

const getInitData = async (models, params) => {
  const { boardId } = params;

  models.board.hasMany(models.list, {
    foreignKey: 'boardId',
    sourceKey: 'boardId',
  });
  models.list.belongsTo(models.board, {
    foreignKey: 'boardId',
    targetKey: 'boardId',
  });

  models.list.hasMany(models.card, {
    foreignKey: 'listId',
    sourceKey: 'listId',
  });

  models.card.belongsTo(models.list, {
    foreignKey: 'listId',
    targetKey: 'listId',
  });

  const result = await models.board.findAll({
    where: {
      boardId: Number(boardId),
    },
    include: [
      {
        model: models.list,
        include: [
          {
            model: models.card,
          },
        ],
      },
    ],
  });
  return result.filter(data => {
    return data.dataValues;
  })[0];
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

export default { modifyBG, modifyTitle, createBoard, getBoard, getInitData };
