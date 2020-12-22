import pkg from 'sequelize';

const createCardListInstance = db => {
  const { DataTypes } = pkg;

  db.define(
    'list',
    {
      listId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      boardId: {
        type: DataTypes.INTEGER,
      },
      listTitle: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
    },
  );
};

export default createCardListInstance;
