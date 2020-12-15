import express from 'express';
import passport from 'passport';
import Strategy from 'passport-local';
import isValidateUserSignupData from '../validation/userSignup.js';
import user from '../service/user.js';

const router = express.Router();

router.post('/login', async (req, res, next) => {
  const userInfoExceptPw = await User.LoginUser(req.db.models, req.body);
  return res.status(200).json(userInfoExceptPw);
});

// sign up
router.post('/signup', async (req, res, next) => {
  // 1. 데이터 형식 검사
  // 2. 가입되어 있는 아이디인지 확인
  // 3. 가입

  if (!isValidateUserSignupData(req.body)) {
    res.status(400).send({ message: 'invalid data' });
  }

  const { userId } = req.body;
  const { models } = req.db;
  const registerdUser = await user.findUser(models, userId);

  if (!registerdUser) {
    const result = await user.createUser(req.db, req.body);
    res.status(200).send(result);
  }
  next();
});

export default router;
