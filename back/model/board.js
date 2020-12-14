import pkg from 'sequelize';

const createBoardInstance = async db => {
  const { DataTypes } = pkg;

  await db.define(
    'board',
    {
      boardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      boardName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      backgroundType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      backgroundValue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    },
  );
};

export default createBoardInstance;
