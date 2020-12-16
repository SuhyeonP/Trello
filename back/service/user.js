import bcrypt from 'bcrypt';
import board from './board.js';

const createUser = async (db, signUpData) => {
  const hashedPassword = await bcrypt.hash(signUpData.userPassword, 10);
  const newUserData = await db.user.build({
    userId: signUpData.userId,
    userNickName: signUpData.userNickName,
    userPassword: hashedPassword,
  });

  try {
    const hi = await newUserData.save();
    const result = await db.board.build({
      userId: Number(hi.dataValues.id),
      createdAt: new Date(),
      backgroundType: 0,
    });
    result.save();
    return hi;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const findUser = async (db, userId) => {
  const checkDuplicate = db.user.findOne({
    where: {
      userId,
    },
  });
  return checkDuplicate;
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

const reloadUser = async (db, user) => {
  const miniUser = db.user.findOne(user.id);
  return miniUser;
};

export default { reloadUser, LoginUser, createUser, findUser };
