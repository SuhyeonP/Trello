import pkg from 'sequelize';

const createUserInstance = db => {
  const { DataTypes } = pkg;

  db.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      userPassword: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      userNickName: {
        type: DataTypes.STRING(10),
      },
    },
    {
      freezeTableName: true,
    },
  );
};

export default createUserInstance;
