import pkg from 'sequelize';

const createCardInstance = db => {
  const { DataTypes } = pkg;

  db.define(
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
      checklist: {
        type: DataTypes.JSON,
      },
    },
    {
      freezeTableName: true,
    },
  );
};

export default createCardInstance;
