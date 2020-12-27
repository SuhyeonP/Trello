import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from 'passport';
import dotenv from 'dotenv';
import session from 'express-session';
import hpp from 'hpp';
import helmet from 'helmet';
import indexRouter from './router/index.js';
import boardRouter from './router/board.js';
import listRouter from './router/list.js';
import cardRouter from './router/card.js';
import userRouter from './router/user.js';
import passportConfig from './passport/index.js';
import local from './passport/local.js';

dotenv.config();
const app = express();
app.use((req, res, next) => {
  req.db = app.get('db');
  next();
});

if (process.env.NODE_ENV === 'production') {
  app.use(hpp());
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(
    cors({
      origin: [
        'http://localhost:3060',
        'http://54.180.53.11:3060',
        'http://honeyhyoni.shop:3060',
      ],
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
    cookie: {
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === 'production' && '.honeyhyoni.shop',
    },
  }),
);

app.use((req, res, next) => {
  const { models } = req.db;
  passportConfig(models);
  local(models);
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
