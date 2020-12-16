import express from 'express';
import passport from 'passport';
import isValidateUserLoginData from '../validation/userLogin.js';
import isValidateUserSignupData from '../validation/userSignup.js';
import User from '../service/user.js';

const router = express.Router();

router.post('/login', async (req, res, next) => {
  const userInfoExceptPw = await User.LoginUser(req.db.models, req.body);
  return res.status(200).json(userInfoExceptPw);
});

// sign up
router.post('/', async (req, res, next) => {
  try {
    const exUser = await User.findUser(req.db.models, req.body.userId);
    if (exUser) {
      return res.status(401).send('Duplicated Id');
    }
    if (isValidateUserSignupData(req.body)) {
      const result = await User.createUser(req.db.models, req.body);
      res.status(201).send('ok');
    } else {
      res.status(400).send({
        message: 'invalid data',
      });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
