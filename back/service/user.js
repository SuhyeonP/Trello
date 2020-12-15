import bcrypt from 'bcrypt';

// TODO create후에 반환되는 값들 중 날짜 값을 yyyy-mm-dd hh:mm:ss
// 포맷으로 변경하는 코드가 중복되어서 사용되어짐. 모듈로 분리할것

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
          backgroundType: 'color',
          backgroundValue: 'blue',
        },
        { transaction: t },
      );
      const localTime = createDate(result.dataValues.createdAt);
      result.dataValues.createdAt = localTime;
      result.dataValues.updatedAt = localTime;
      return result;
    });

    return successSignupData;
  } catch (e) {
    console.log(e);
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
    const findUserBoard = await db.board.findOne(checkUser.dataValues.boardId);
    return { user: checkUser, board: findUserBoard };
  } catch (err) {
    console.error(err);
    return err;
  }
};

export default { LoginUser, createUser, findUser };
