import bcrypt from 'bcrypt';

const createDate = date => {
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const createUser = async (db, signUpData) => {
  try {
    const { models } = db;
    const hashedPassword = await bcrypt.hash(signUpData.userPassword, 10);
    const successSignupData = await db.transaction(async t => {
      const newUserData = await models.user.create(
        {
          userId: signUpData.userId,
          userNickName: signUpData.userNickName,
          userPassword: hashedPassword,
        },
        { transaction: t },
      );

      const { id } = newUserData.dataValues;
      const result = await models.board.create(
        {
          userId: id,
          boardTitle: 'todo',
          backgroundType: 0,
          backgroundValue: null,
        },
        { transaction: t },
      );
      const localTime = createDate(result.dataValues.createdAt);
      result.dataValues.createdAt = localTime;
      return result;
    });
    return successSignupData;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const findUser = async (db, userId) => {
  const checkDuplicate = await db.user.findOne({
    where: {
      userId,
    },
  });
  return checkDuplicate !== null;
};

const LoginUser = async (db, loginInfo) => {
  const checkUser = await db.user.findOne({
    where: { userId: loginInfo.userId },
    attributes: {
      exclude: ['userPassword'],
    },
  });
  try {
    return checkUser;
  } catch (err) {
    console.error(err);
    return err;
  }
};

const reloadUser = async (db, user) => {
  const miniUser = await db.user.findByPk(user.id, {
    attributes: {
      exclude: ['userPassword'],
    },
  });
  return miniUser;
};

export default { reloadUser, LoginUser, createUser, findUser };
