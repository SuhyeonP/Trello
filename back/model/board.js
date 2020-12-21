import pkg from 'sequelize';

const createBoardInstance = db => {
  const { DataTypes } = pkg;

  db.define(
    'board',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      boardTitle: {
        type: DataTypes.STRING(15),
      },
      backgroundValue: {
        type: DataTypes.TEXT,
      },
    },
    {
      freezeTableName: true,
    },
  );
};

export default createBoardInstance;
