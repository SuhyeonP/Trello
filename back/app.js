import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import indexRouter from './router/index.js';
import boardRouter from './router/board.js';
import listRouter from './router/list.js';
import cardRouter from './router/card.js';
import userRouter from './router/user.js';


dotenv.config();
const app = express();
app.use((req, res, next) => {
  req.db = app.get('db');
  next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

if (process.env.NODE_ENV === 'production') {
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );
} else {
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
}


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
