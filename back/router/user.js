import express from 'express';
import passport from 'passport';
import isValidateUserLoginData from '../validation/userLogin.js';
import isValidateUserSignupData from '../validation/userSignup.js';
import User from '../service/user.js';
import { isLoggedIn, isNotLoggedIn } from './middlewares.js';
import local from '../passport/local.js';

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
  passport.authenticate('local'),
  async (req, res, next) => {
    const userInfo = await User.LoginUser(req.db.models, req.body);
    console.log(userInfo);
    return res.status(200).json(userInfo);
  },
);
// router.post('/login', isNotLoggedIn, (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     console.log(err, user, info);
//     if (err) {
//       console.error(err);
//       return next(err);
//     } // info is client error
//     if (info.message) {
//       return res.status(401).send(info.reason);
//     }
//     return req.login(user, async loginErr => {
//       if (loginErr) {
//         console.error(loginErr);
//         return next(loginErr);
//       }
//       const userInfo = await User.LoginUser(req.db.models, req.body);
//       console.log(userInfo);
//       return res.status(200).json(user);
//     });
//   })(res, res, next);
// });

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

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

export default router;
