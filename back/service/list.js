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

export default { createList };
