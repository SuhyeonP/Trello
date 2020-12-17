import express from 'express';
import passport from 'passport';
import isValidateUserSignupData from '../validation/userSignup.js';
import User from '../service/user.js';
import local from '../passport/local.js';
import isValidateUserLoginData from '../validation/userLogin.js';
import { isLoggedIn, isNotLoggedIn } from './middlewares.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const userInfoExceptPw = await User.reloadUser(req.db.models, req.user);
      res.status(200).json(userInfoExceptPw);
    } else {
      res.status(200).json(null);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});
router.post(
  '/login',
  isNotLoggedIn,
  passport.authenticate('local'),
  async (req, res, next) => {
    const userInfo = await User.LoginUser(req.db.models, req.body);
    return res.status(200).json(userInfo);
  },
);
router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

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
