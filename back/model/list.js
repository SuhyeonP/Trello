import pkg from 'sequelize';

const createCardListInstance = db => {
  const { DataTypes } = pkg;

  db.define(
    'list',
    {
      boardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
