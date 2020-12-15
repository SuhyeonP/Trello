const createDate = date => {
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const createList = async (db, listData) => {
  try {
    const result = await db.list.create(listData);
    const returnValues = await result.get();

    const localDateTime = createDate(returnValues.createdAt);

    returnValues.createdAt = localDateTime;
    returnValues.updatedAt = localDateTime;

    return returnValues;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default { createList };
