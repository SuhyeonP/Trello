import express from 'express';
import passport from 'passport';
import Strategy from 'passport-local';
import isValidateUserSignupData from '../validation/userSignup.js';
import user from '../service/user.js';

const router = express.Router();

router.post('/login', async (req, res, next) => {
  const userInfoExceptPw = await user.LoginUser(req.db.models, req.body);
  return res.status(200).json(userInfoExceptPw);
});

// sign up
router.post('/signup', async (req, res, next) => {
  if (!isValidateUserSignupData(req.body)) {
    res.status(400).send({ message: 'invalid data' });
  }

  const { userId } = req.body;
  const { models } = req.db;
  const registerdUser = await user.findUser(models, userId);

  if (!registerdUser) {
    const result = await user.createUser(req.db, req.body);
    res.status(200).send(result);
    return;
  }

  res.status(400).send({ message: 'duplicated user' });
});

export default router;
