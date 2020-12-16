import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';
import dotenv from 'dotenv';
import session from 'express-session';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import indexRouter from './router/index.js';
import boardRouter from './router/board.js';
import listRouter from './router/list.js';
import cardRouter from './router/card.js';
import userRouter from './router/user.js';
import passportConfig from './passport/index.js';
// import local from './passport/local.js';
import createUserInstance from './model/user.js';

dotenv.config();
const app = express();
app.use((req, res, next) => {
  req.db = app.get('db');
  next();
});
passportConfig();

if (process.env.NODE_ENV === 'production') {
  app.use(
    cors({
      origin: 'http://localhost:3060',
      credentials: true,
    }),
  );
} else {
  app.use(
    cors({
      origin: 'http://localhost:3060',
      credentials: true,
    }),
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  }),
);

app.use((req, res, next) => {
  // local();
  const { models } = req.db;
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'userId',
        passwordField: 'userPassword',
      },
      async (userId, userPassword, done) => {
        console.log('isti2', userId, userPassword);
        try {
          const existUser = await models.user.findOne({
            where: {
              userId,
            },
          });
          if (!existUser) {
            return done(null, false, { reason: 'wrong Id' });
          }
          const result = await bcrypt.compare(
            userPassword,
            existUser.userPassword,
          );
          if (result) {
            return done(null, existUser);
          }
          return done(null, false, { reason: 'wrong password' });
        } catch (err) {
          console.error(err);
          return done(err);
        }
      },
    ),
  );
  // function local() {
  //   console.log('isti');
  //
  //   passport.use(
  //     new LocalStrategy(
  //       {
  //         usernameField: 'userId',
  //         passwordField: 'userPassword',
  //       },
  //       async (userId, userPassword, done) => {
  //         const { model } = req.db;
  //         console.log('isti2', userId, userPassword);
  //         try {
  //           const existUser = await model.user.findOne({
  //             where: {
  //               userId,
  //             },
  //           });
  //           if (!existUser) {
  //             return done(null, false, { reason: 'wrong Id' });
  //           }
  //           const result = await bcrypt.compare(
  //             userPassword,
  //             existUser.userPassword,
  //           );
  //           if (result) {
  //             return done(null, existUser);
  //           }
  //           return done(null, false, { reason: 'wrong password' });
  //         } catch (err) {
  //           console.error(err);
  //           return done(err);
  //         }
  //       },
  //     ),
  //   );
  // }
  // local();
  next();
});
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/board', boardRouter);
app.use('/list', listRouter);
app.use('/card', cardRouter);
app.use('/user', userRouter);

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(500).send({
    err,
    message: err.message,
  });
});

export default app;
