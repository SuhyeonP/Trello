import { createDate } from '../util/createDate.js';

const createList = async (db, listData) => {
  try {
    const result = await db.list.create(listData);
    const data = await result.get();

    const localDateTime = createDate(data.createdAt);

    data.createdAt = localDateTime;
    data.updatedAt = localDateTime;

    const returnValues = await db.board.findByPk(data.boardId);

    return returnValues;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const getListInformation = async (models, listId) => {
  try {
    models.list.hasMany(models.card, {
      foreignKey: 'listId',
      sourceKey: 'listId',
    });

    models.card.belongsTo(models.list, {
      foreignKey: 'listId',
      targetKey: 'listId',
    });

    const result = await models.list.findAll({
      where: {
        listId: Number(listId),
      },
      include: [
        {
          model: models.card,
        },
      ],
    });
    return result[0].dataValues;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default { createList, getListInformation };
