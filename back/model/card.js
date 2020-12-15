import pkg from 'sequelize';

const createCardInstance = async db => {
  const { DataTypes } = pkg;

  await db.define(
    'card',
    {
      cardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cardListId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cardTitle: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      background: {
        type: DataTypes.TEXT,
        allowNull: true,
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

export default createCardInstance;
