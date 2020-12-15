import pkg from 'sequelize';

const createBoardInstance = db => {
  const { DataTypes } = pkg;

  db.define(
    'board',
    {
      boardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      boardTitle: {
        type: DataTypes.STRING(15),
      },
      backgroundType: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
