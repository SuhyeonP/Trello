import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './router/index.js';
import cardRouter from './router/card.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  req.db = app.get('db');
  next();
});

app.use('/', indexRouter);
app.use('/card', cardRouter);

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(500).send({
    err,
    message: err.message,
  });
});

export default app;
