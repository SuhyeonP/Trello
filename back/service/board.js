const createDate = date => {
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const getBoard = async db => {
  const data = await db.board.findAll();
  return data;
};

export default { getBoard };
